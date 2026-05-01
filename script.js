const charDictionary = {
    "Standard Colors": [
        { char: "§0", label: "Black", colorHex: "#000000" }, { char: "§1", label: "Dk Blue", colorHex: "#0000AA" },
        { char: "§2", label: "Dk Green", colorHex: "#00AA00" }, { char: "§3", label: "Dk Aqua", colorHex: "#00AAAA" },
        { char: "§4", label: "Dk Red", colorHex: "#AA0000" }, { char: "§5", label: "Dk Purple", colorHex: "#AA00AA" },
        { char: "§6", label: "Gold", colorHex: "#FFAA00" }, { char: "§7", label: "Gray", colorHex: "#AAAAAA" },
        { char: "§8", label: "Dk Gray", colorHex: "#555555" }, { char: "§9", label: "Blue", colorHex: "#5555FF" },
        { char: "§a", label: "Green", colorHex: "#55FF55" }, { char: "§b", label: "Aqua", colorHex: "#55FFFF" },
        { char: "§c", label: "Red", colorHex: "#FF5555" }, { char: "§d", label: "Lt Purple", colorHex: "#FF55FF" },
        { char: "§e", label: "Yellow", colorHex: "#FFFF55" }, { char: "§f", label: "White", colorHex: "#FFFFFF" }
    ],
    "Material Colors": [
        { char: "§g", label: "Minecoin", colorHex: "#DDD605" }, { char: "§h", label: "Quartz", colorHex: "#E3D4D1" },
        { char: "§i", label: "Iron", colorHex: "#CECACA" }, { char: "§j", label: "Netherite", colorHex: "#443A3B" },
        { char: "§m", label: "Redstone", colorHex: "#971607" }, { char: "§n", label: "Copper", colorHex: "#B4684D" },
        { char: "§p", label: "Gold", colorHex: "#DEB12D" }, { char: "§q", label: "Emerald", colorHex: "#47A036" },
        { char: "§s", label: "Diamond", colorHex: "#2CBAA8" }, { char: "§t", label: "Lapis", colorHex: "#21497B" },
        { char: "§u", label: "Amethyst", colorHex: "#9A5CC6" }
    ],
    "Styles & Modifiers": [
        { char: "§l", label: "Bold" }, { char: "§o", label: "Italic" },
        { char: "§k", label: "Glitch" }, { char: "§r", label: "Reset" },
        { char: "¦", label: "Thin Font" }, { char: "\\n", label: "Line Break" }
    ],
    "Customizable Templates": [
        { char: "§8[ §aPROPERTY OF §8]\n§2{Player}\n§8[------------]", label: "Chest Ownership", fullWidth: true, prompts: ["Player"] },
        { char: "§e⚠ §0§lWARNING §r§e⚠\n§8{Hazard}\n§cDO NOT ENTER", label: "Hazard Zone", fullWidth: true, prompts: ["Hazard"] }
    ],
    "ASCII Pixel Art": [
        { char: "§7▲\n§b█\n§6▬╬▬\n§8█", label: "Diamond Sword", fullWidth: true },
        { char: "§7[§c❤§7]", label: "Health Pip", fullWidth: true }
    ],
    "UI Glyphs & Symbols": [
        { char: "", label: "Coin" }, { char: "", label: "Heart" },
        { char: "█", label: "Full" }, { char: "▲", label: "Arrow" }
    ]
};

// Global State
let currentMode = 'visual'; // 'visual' or 'raw'
const visualEditor = document.getElementById('visualEditor');
const rawEditor = document.getElementById('rawEditor');
const palette = document.getElementById('palette');

// Hex to Bedrock Code maps for the compiler
const hexToCode = {};
const codeToHex = {};
["Standard Colors", "Material Colors"].forEach(cat => {
    charDictionary[cat].forEach(c => {
        // Normalize hex codes for strict matching
        const normHex = c.colorHex.toLowerCase();
        hexToCode[normHex] = c.char;
        codeToHex[c.char] = normHex;
    });
});

// --- TAB SWITCHING & SYNC LOGIC ---
function switchTab(mode) {
    if (currentMode === mode) return;
    
    document.getElementById('btnVisual').classList.remove('active');
    document.getElementById('btnRaw').classList.remove('active');
    visualEditor.classList.remove('active');
    rawEditor.classList.remove('active');

    if (mode === 'visual') {
        document.getElementById('btnVisual').classList.add('active');
        visualEditor.classList.add('active');
        // Compile Raw -> Visual before switching
        visualEditor.innerHTML = parseRawToHTML(rawEditor.value);
    } else {
        document.getElementById('btnRaw').classList.add('active');
        rawEditor.classList.add('active');
        // Compile Visual -> Raw before switching
        rawEditor.value = parseHTMLToRaw(visualEditor);
    }
    currentMode = mode;
}

// Parse DOM nodes back into Bedrock string
function parseHTMLToRaw(element) {
    let rawText = "";
    
    for (let node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            rawText += node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            let prefix = "";
            let suffix = "";
            
            if (node.tagName === 'DIV' || node.tagName === 'BR') {
                rawText += "\n";
            }

            // Extract native browser colors back to MC Hex
            if (node.style && node.style.color) {
                const rgbMatch = node.style.color.match(/\d+/g);
                if (rgbMatch && rgbMatch.length >= 3) {
                    const hex = "#" + ((1 << 24) + (parseInt(rgbMatch[0]) << 16) + (parseInt(rgbMatch[1]) << 8) + parseInt(rgbMatch[2])).toString(16).slice(1).toLowerCase();
                    if (hexToCode[hex]) {
                        prefix += hexToCode[hex];
                        suffix = "§r"; // Reset after span
                    }
                }
            }
            if (node.tagName === 'B' || node.style.fontWeight === 'bold') { prefix += "§l"; suffix = "§r"; }
            if (node.tagName === 'I' || node.style.fontStyle === 'italic') { prefix += "§o"; suffix = "§r"; }

            rawText += prefix + parseHTMLToRaw(node) + suffix;
        }
    }
    // Clean up redundant resets
    return rawText.replace(/§r§r/g, "§r").replace(/\n§r/g, "\n");
}

// Parse Bedrock string into rich HTML Spans
function parseRawToHTML(rawText) {
    if (!rawText) return "";
    let html = "";
    const lines = rawText.split('\n');
    
    lines.forEach((line, index) => {
        let currentColor = '#ffffff'; // Default to white in WYSIWYG so it's visible on black
        let isBold = false;
        let isItalic = false;
        
        let lineHtml = "";
        let currentSpan = "";

        function flushSpan() {
            if (currentSpan) {
                let styles = `color: ${currentColor};`;
                if (isBold) styles += ` font-weight: bold;`;
                if (isItalic) styles += ` font-style: italic;`;
                const safeText = currentSpan.replace(/ /g, '&nbsp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                lineHtml += `<span style="${styles}">${safeText}</span>`;
                currentSpan = "";
            }
        }

        for (let i = 0; i < line.length; i++) {
            if (line[i] === '§' && i + 1 < line.length) {
                flushSpan();
                const code = line[i + 1].toLowerCase();
                const fullCode = "§" + code;
                
                if (codeToHex[fullCode]) {
                    currentColor = codeToHex[fullCode];
                    isBold = false; isItalic = false;
                } else if (code === 'l') { isBold = true; } 
                  else if (code === 'o') { isItalic = true; } 
                  else if (code === 'r') { currentColor = '#ffffff'; isBold = false; isItalic = false; }
                i++; // Skip the code letter
            } else {
                currentSpan += line[i];
            }
        }
        flushSpan();
        html += (index > 0 ? "<div>" : "") + (lineHtml || "<br>") + (index > 0 ? "</div>" : "");
    });
    return html;
}

// --- MENU GENERATOR LOGIC ---
for (const [category, characters] of Object.entries(charDictionary)) {
    const accBtn = document.createElement('button');
    accBtn.className = 'accordion-btn';
    accBtn.innerText = category;
    
    const accContent = document.createElement('div');
    accContent.className = 'accordion-content';

    const grid = document.createElement('div');
    grid.className = 'button-grid';

    characters.forEach(item => {
        const charBtn = document.createElement('button');
        charBtn.className = 'char-btn';
        if (item.fullWidth) charBtn.classList.add('full-width');

        let innerHTML = '';
        if (item.colorHex) innerHTML += `<span class="color-swatch" style="background-color: ${item.colorHex};"></span>`;
        
        let displayChar = item.char.replace(/\n/g, '\\n');
        if(item.fullWidth && displayChar.length > 25) displayChar = displayChar.substring(0, 22) + "...";

        innerHTML += `<span>${displayChar}</span> <small>${item.label}</small>`;
        charBtn.innerHTML = innerHTML;
        
        charBtn.onclick = () => {
            let finalOutput = item.char;
            if(item.prompts) {
                item.prompts.forEach(p => {
                    const userInput = prompt(`Enter text for {${p}}:`, "");
                    finalOutput = finalOutput.replace(`{${p}}`, userInput || "");
                });
            }
            insertData(finalOutput, item.colorHex, item.char);
        };
        grid.appendChild(charBtn);
    });

    accContent.appendChild(grid);
    palette.appendChild(accBtn);
    palette.appendChild(accContent);

    accBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        accContent.style.maxHeight = accContent.style.maxHeight ? null : accContent.scrollHeight + "px";
    });
}

// --- UNIVERSAL INSERTION ---
function insertData(text, colorHex, rawCode) {
    if (currentMode === 'visual') {
        visualEditor.focus();
        if (colorHex) {
            // Apply color to highlighted text natively!
            document.execCommand('foreColor', false, colorHex);
        } else if (rawCode === '§l') {
            document.execCommand('bold', false, null);
        } else if (rawCode === '§o') {
            document.execCommand('italic', false, null);
        } else {
            // If it's just a symbol or template, parse it to rich text and insert
            const richHTML = parseRawToHTML(text);
            document.execCommand('insertHTML', false, richHTML);
        }
    } else {
        // Raw Mode insertion
        const start = rawEditor.selectionStart;
        const end = rawEditor.selectionEnd;
        rawEditor.value = rawEditor.value.substring(0, start) + text + rawEditor.value.substring(end);
        rawEditor.selectionStart = rawEditor.selectionEnd = start + text.length;
        rawEditor.focus();
    }
}

function compileAndCopy() {
    let finalBedrockString = "";
    
    // Always fetch the freshest data from whichever tab is currently active
    if (currentMode === 'visual') {
        finalBedrockString = parseHTMLToRaw(visualEditor);
    } else {
        finalBedrockString = rawEditor.value;
    }

    // Create a temporary textarea to hold the text for the mobile clipboard API
    const tempInput = document.createElement("textarea");
    tempInput.value = finalBedrockString;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const btn = document.querySelector('.action-btn.primary');
    const originalText = btn.innerText;
    btn.innerText = "Copied Data!";
    setTimeout(() => { btn.innerText = originalText; }, 2000);
}

function clearSign() {
    visualEditor.innerHTML = '';
    rawEditor.value = '';
}
