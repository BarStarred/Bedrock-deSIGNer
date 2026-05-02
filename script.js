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
    "Sign Tutorials": [
        {
            char: `Use the section sign and .`,
            label: "Formatting guide",
            fullWidth: true
        },
        {
            char: `§00 §11 §22 §33 §44 §55 §66 §77 §88 §99 
§aa §bb §cc §dd §ee §ff §gg §hh §ii §jj §mm §nn
§pp §qq §ss §gt §uu §vv §ww §xx §yy §zz
§kk §k GLITCH §ll §lBold §oo §oItalic`,
            label: "Formatting Characters",
            fullWidth: true
        }
    ],
    "Lever & Switch States": [
    {
        char: "§8[ §a███ §8]\n§0§l{System}\n§8[ §c▒▒▒ §8]",
        label: "Switch: UP (On)",
        fullWidth: true,
        prompts: ["System"]
    },
    {
        char: "§8[ §a▒▒▒ §8]\n§0§l{System}\n§8[ §c███ §8]",
        label: "Switch: DOWN (Off)",
        fullWidth: true,
        prompts: ["System"]
    },
    {
        char: "§8┌───────┐\n§0 {System}\n§8└───────┘\n§a▲ §lACTIVE §r§a▲",
        label: "State: Active (Up)",
        fullWidth: true,
        prompts: ["System"]
    },
    {
        char: "§8┌───────┐\n§0 {System}\n§8└───────┘\n§c▼ §lLOCKED §r§c▼",
        label: "State: Locked (Down)",
        fullWidth: true,
        prompts: ["System"]
    },
    {
        char: "§8[ §aON §8] §0{Line 1}\n§8[ §cOFF §8] §0{Line 2}",
        label: "Dual State Legend",
        fullWidth: true,
        prompts: ["Line 1", "Line 2"]
    },
    {
        char: "§e⚡ §0§lMAINS §r§e⚡\n§8━━━━━━━━━━━━━━\n§a[ §lENGAGED §r§a]",
        label: "Power: Engaged",
        fullWidth: true
    },
    {
        char: "§e⚡ §0§lMAINS §r§e⚡\n§8━━━━━━━━━━━━━━\n§c[ §lSTANDBY §r§c]",
        label: "Power: Standby",
        fullWidth: true
    }],
    
    "Borders & Frames": [
        {
            char: "§8━━━━━━━━━━━━━━",
            label: "Thick Line",
            fullWidth: true
        },
        {
            char: "§7┈┈┈┈┈┈┈┈┈┈┈┈┈┈",
            label: "Dotted Line",
            fullWidth: true
        },
        {
            char: "§8================\n§0\n§0\n§8================",
            label: "Double Top/Bottom",
            fullWidth: true
        },
        {
            char: "§8┏━━━━━━━━━━━━┓\n§0{Line 1}\n§0{Line 2}\n§8┗━━━━━━━━━━━━┛",
            label: "Solid Frame",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§8╔════════════╗\n§0{Line 1}\n§0{Line 2}\n§8╚════════════╝",
            label: "Double Frame",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§8~-~-~-~-~-~-~-~-\n§0\n§0\n§8~-~-~-~-~-~-~-~-",
            label: "Wave Border",
            fullWidth: true
        },
        {
            char: "§8[§7============§8]",
            label: "Bracket Border",
            fullWidth: true
        },
        {
            char: "§e⚜§8━━━━━━━━━━§e⚜\n§0{Line 1}\n§0{Line 2}\n§e⚜§8━━━━━━━━━━§e⚜",
            label: "Royal Frame",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§e▄§0▄§e▄§0▄§e▄§0▄§e▄§0▄§e▄§0▄§e▄§0▄§e▄§0▄\n§0§l{Warning}\n§0{Subtext}\n§e▀§0▀§e▀§0▀§e▀§0▀§e▀§0▀§e▀§0▀§e▀§0▀§e▀§0▀",
            label: "Hazard Tape",
            fullWidth: true,
            prompts: ["Warning", "Subtext"]
        },
        {
            char: "§d✧§5┈┈┈┈┈┈┈┈┈┈§d✧\n§0{Line 1}\n§0{Line 2}\n§d✧§5┈┈┈┈┈┈┈┈┈┈§d✧",
            label: "Mystic Frame",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§c⚔ §8━━━━━━━━ §c⚔\n§0{Line 1}\n§0{Line 2}\n§8━━━━━━━━━━━━━━",
            label: "Combat Header",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§8▏ §0{Line 1} §8▕\n§8▏ §0{Line 2} §8▕\n§8▏ §0{Line 3} §8▕\n§8▏ §0{Line 4} §8▕",
            label: "Side Brackets",
            fullWidth: true,
            prompts: ["Line 1", "Line 2", "Line 3", "Line 4"]
        },
        {
            char: "§8██████████████\n§f§l{Title}\n§8██████████████\n§0{Subtext}",
            label: "Thick Header",
            fullWidth: true,
            prompts: ["Title", "Subtext"]
        },
        {
            char: "§3┌─[ §b{Title} §3]─┐\n§0{Line 1}\n§0{Line 2}\n§3└────────────┘",
            label: "Data Terminal",
            fullWidth: true,
            prompts: ["Title", "Line 1", "Line 2"]
        },
        {
            char: "§2❁ §a┈┈┈┈┈┈┈┈ §2❁\n§0{Line 1}\n§0{Line 2}\n§2❁ §a┈┈┈┈┈┈┈┈ §2❁",
            label: "Nature Scroll",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§8┏            ┓\n§0{Line 1}\n§0{Line 2}\n§8┗            ┛",
            label: "Minimal Corners",
            fullWidth: true,
            prompts: ["Line 1", "Line 2"]
        },
        {
            char: "§4► §c§l{Title} §4◄\n§8━━━━━━━━━━━━━━\n§0{Line 1}\n§0{Line 2}",
            label: "Danger Notice",
            fullWidth: true,
            prompts: ["Title", "Line 1", "Line 2"]
        },
        {
            char: "§b♦ §3{Title} §b♦\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0{Line 1}\n§0{Line 2}",
            label: "Gemstone Header",
            fullWidth: true,
            prompts: ["Title", "Line 1", "Line 2"]
        },
        {
            char: "§6★ §e§l{Title} §6★\n§8━━━━━━━━━━━━━━\n§0{Line 1}\n§0{Line 2}",
            label: "Star Banner",
            fullWidth: true,
            prompts: ["Title", "Line 1", "Line 2"]
        }
        
        
    ],
    
    /*  "Styles & Modifiers": [
         { char: "§l", label: "Bold" }, { char: "§o", label: "Italic" },
         { char: "§k", label: "Glitch" }, { char: "§r", label: "Reset" },
         { char: "¦", label: "Thin Font" }, { char: "\\n", label: "Line Break" }
     ], */
    "Albion & Fantasy RPG": [
    {
        char: "§e♦ §6§lHEROES' GUILD §r§e♦\n§8━━━━━━━━━━━━━━\n§0Quest: {Quest}\n§0Bounty: {Reward}",
        label: "Guild Quest Board",
        fullWidth: true,
        prompts: ["Quest", "Reward"]
    },
    {
        char: "§6§lThe {Tavern Name}\n§8~-~-~-~-~-~-~-~-\n§0Cold Ale\n§0Warm Beds",
        label: "Albion Pub Sign",
        fullWidth: true,
        prompts: ["Tavern Name"]
    },
    {
        char: "§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0Road to §l{Town}\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n       §e►§0►§e►",
        label: "Town Signpost (Right)",
        fullWidth: true,
        prompts: ["Town"]
    },
    {
        char: "§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0Road to §l{Town}\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n §e◄§0◄§e◄",
        label: "Town Signpost (Left)",
        fullWidth: true,
        prompts: ["Town"]
    },
    {
        char: "§4⚠ §c§lBEWARE §r§4⚠\n§8━━━━━━━━━━━━━━\n§0{Creature} Spotted\n§0Stay on the Path",
        label: "Creature Warning",
        fullWidth: true,
        prompts: ["Creature"]
    },
    {
        char: "§5❂ §d§lDEMON DOOR §r§5❂\n§8━━━━━━━━━━━━━━\n§0{Riddle Line 1}\n§0{Riddle Line 2}",
        label: "Demon Door Riddle",
        fullWidth: true,
        prompts: ["Riddle Line 1", "Riddle Line 2"]
    },
    {
        char: "§2⌂ §a§lPROPERTY §r§2⌂\n§8━━━━━━━━━━━━━━\n§0Status: {Status}\n§0Price: {Price}",
        label: "Real Estate Sign",
        fullWidth: true,
        prompts: ["Status", "Price"]
    }],
        "Wayfinding & Navigation": [
        { 
            char: "§8[ §e► §8] §0§l{Location}\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0Dist: {Blocks} blocks", 
            label: "Directional (Right)", 
            fullWidth: true,
            prompts: ["Location", "Blocks"]
        },
        { 
            char: "§0§l{Location} §8[ §e◄ §8]\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0Dist: {Blocks} blocks", 
            label: "Directional (Left)", 
            fullWidth: true,
            prompts: ["Location", "Blocks"]
        },
        { 
            char: "§8  ▲ §0{Forward}\n§8◄ §0{Left}\n§0  {Right} §8►\n§8  ▼ §0{Back}", 
            label: "Crossroads", 
            fullWidth: true,
            prompts: ["Forward", "Left", "Right", "Back"]
        },
        { 
            char: "§f██████████████\n§c§l     EXIT     \n§f██████████████\n§0       §l▼", 
            label: "Illuminated Exit", 
            fullWidth: true 
        },
        { 
            char: "§8┏━━━━━━━━━━━━┓\n§0  Level §l{Level}§r\n§8┗━━━━━━━━━━━━┛\n§0{Area Name}", 
            label: "Elevator / Floor", 
            fullWidth: true,
            prompts: ["Level", "Area Name"]
        },
        { 
            char: "§3❖ §b§lFAST TRAVEL §r§3❖\n§8━━━━━━━━━━━━━━\n§0To: {Destination}", 
            label: "Transport Hub", 
            fullWidth: true,
            prompts: ["Destination"]
        },
        { 
            char: "§2↟ §a§l{Trail Name} §r§2↟\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0Difficulty: {Diff}", 
            label: "Hiking Trail", 
            fullWidth: true,
            prompts: ["Trail Name", "Diff"]
        }
    ],

    
    "Storage Room Labels": [
    {
        char: "§8┏━━━━━━━━┓\n§0§l{Item}\n§8┗━━━━━━━━┛",
        label: "Single Item Frame",
        fullWidth: true,
        prompts: ["Item"]
    },
    {
        char: "§0{Item 1}\n§8──────────\n§0{Item 2}",
        label: "Two Items (Split)",
        fullWidth: true,
        prompts: ["Item 1", "Item 2"]
    },
    {
        char: "§8▪ §0{Item 1}\n§8▪ §0{Item 2}\n§8▪ §0{Item 3}\n§8▪ §0{Item 4}",
        label: "Four Items (Dense)",
        fullWidth: true,
        prompts: ["Item 1", "Item 2", "Item 3", "Item 4"]
    },
    {
        char: "§8[ §a▲ §8]\n§0§l{Item}",
        label: "Chest Above",
        fullWidth: true,
        prompts: ["Item"]
    },
    {
        char: "§0§l{Item}\n§8[ §c▼ §8]",
        label: "Chest Below",
        fullWidth: true,
        prompts: ["Item"]
    },
    {
        char: "§8[ §e◄ §8] §0{Item}",
        label: "Chest Left",
        fullWidth: true,
        prompts: ["Item"]
    },
    {
        char: "§0{Item} §8[ §e► §8]",
        label: "Chest Right",
        fullWidth: true,
        prompts: ["Item"]
    }],
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
    ],
        "Arrows & Pointers": [
        { 
            char: "▲", 
            label: "Solid Up" 
        },
        { 
            char: "▼", 
            label: "Solid Down" 
        },
        { 
            char: "◄", 
            label: "Solid Left" 
        },
        { 
            char: "►", 
            label: "Solid Right" 
        },
        { 
            char: "↑", 
            label: "Line Up" 
        },
        { 
            char: "↓", 
            label: "Line Down" 
        },
        { 
            char: "←", 
            label: "Line Left" 
        },
        { 
            char: "→", 
            label: "Line Right" 
        },
        { 
            char: "§8◄ §0§l{Text} §r§8►", 
            label: "Flanked Text", 
            fullWidth: true,
            prompts: ["Text"]
        },
        { 
            char: "§e►§6►§c►", 
            label: "Speed Right", 
            fullWidth: true 
        },
        { 
            char: "§c◄§6◄§e◄", 
            label: "Speed Left", 
            fullWidth: true 
        },
        { 
            char: "§a  ▲\n§a▲ █ ▲\n§a  █", 
            label: "Giant Up Arrow", 
            fullWidth: true 
        },
        { 
            char: "§c  █\n§c▼ █ ▼\n§c  ▼", 
            label: "Giant Down Arrow", 
            fullWidth: true 
        },
                { 
            char: "§e◄──┴──►\n§e│\n§e│\n§e▲", 
            label: "Path: Fork", 
            fullWidth: true 
        },
        { 
            char: "§a┌──►\n§a│\n§a│\n§a▲", 
            label: "Path: Branch Right", 
            fullWidth: true 
        },
        { 
            char: "§c◄──┐\n§c│\n§c│\n§c▲", 
            label: "Path: Branch Left", 
            fullWidth: true 
        },
        { 
            char: "§b◄██████►\n§b██\n§b██\n§b██", 
            label: "T-Junction Marker", 
            fullWidth: true 
        },
        { 
            char: "§6▼ ┌─┐\n§6│ │ │\n§6└─┘ ▲", 
            label: "U-Turn (Down)", 
            fullWidth: true 
        },
        { 
            char: "§8╔═════╗\n§8║ §c▼ §8║\n§8║ §c▼ §8║\n§8╚═════╝", 
            label: "Drop Shaft (Down)", 
            fullWidth: true 
        },
        { 
            char: "§8╔═════╗\n§8║ §a▲ §8║\n§8║ §a▲ §8║\n§8╚═════╝", 
            label: "Launch Shaft (Up)", 
            fullWidth: true 
        },
        { 
            char: "§7▬▬ι════►\n§0\n§0{Target}", 
            label: "Sword Pointer", 
            fullWidth: true,
            prompts: ["Target"]
        },
        { 
            char: "§c  N  \n§8W §e❖ §8E\n§8  S  ", 
            label: "Compass Rose", 
            fullWidth: true 
        },
        { 
            char: "§4▲\n§4◄ §cO §4►\n§4▼\n§0{Target}", 
            label: "Target Crosshairs", 
            fullWidth: true,
            prompts: ["Target"]
        },
        { 
            char: "§a▲\n§2▲\n§a▲\n§2▲", 
            label: "Speed Boost (Up)", 
            fullWidth: true 
        },
        { 
            char: "§4▼\n§c▼\n§4▼\n§c▼", 
            label: "Speed Boost (Down)", 
            fullWidth: true 
        },
        { 
            char: "§7. . . ┐\n§7.\n§7.\n§a▼", 
            label: "Dotted Trail (Right)", 
            fullWidth: true 
        },
        { 
            char: "§7┌ . . .\n§7.\n§7.\n§c▼", 
            label: "Dotted Trail (Left)", 
            fullWidth: true 
        },
        { 
            char: "§b◄   ►\n§b┌─┴─┐\n§b│   │\n§b▲   ▲", 
            label: "Split / Spread", 
            fullWidth: true 
        },
        { 
            char: "§8[§a██████►§8]", 
            label: "Heavy Progress Arrow", 
            fullWidth: true 
        },
        { 
            char: "§d◄══════►", 
            label: "Double Ended Line", 
            fullWidth: true 
        }

    ],
    "Color & Format Guides": [
        {
            char: "§0§lHOW TO FORMAT\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§0Type the § symbol\n§0before a code key",
            label: "Intro Instruction",
            fullWidth: true
        },
        {
            char: "§0§lWARM COLORS\n§4 4=D.Red  §c c=Red\n§6 6=Gold   §e e=Yel\n§2 2=D.Grn  §a a=L.Grn",
            label: "Cheat Sheet: Warm",
            fullWidth: true
        },
        {
            char: "§0§lCOOL COLORS\n§b b=Aqu    §3 3=Cya\n§9 9=Blu    §1 1=D.Blu\n§d d=Pnk    §5 5=Prp",
            label: "Cheat Sheet: Cool",
            fullWidth: true
        },
        {
            char: "§0§lGREYS & STYLES\n§f f=Wht    §7 7=Gry\n§8 8=D.Gry  §0 0=Blk\n§l l=Bld    §o o=Itl",
            label: "Cheat Sheet: Greys/Style",
            fullWidth: true
        },
        {
            char: "§0§lMATERIAL ORES\n§m m=R.Stn  §n n=Copr\n§p p=M.Gld  §q q=Emrld\n§s s=Diamd  §t t=Lapis",
            label: "Cheat Sheet: Ores",
            fullWidth: true
        },
        {
            char: "§0§lMATERIAL BASES\n§h h=Qrtz   §i i=Iron\n§j j=N.Rite §u u=Amyst\n§g g=Coin   §k k=Glch",
            label: "Cheat Sheet: Bases",
            fullWidth: true
        },
        {
            char: "§0§lADVANCED\n§8┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n§k k §r= §kGlitch\n§r r = Reset Format",
            label: "Cheat Sheet: Advanced",
            fullWidth: true
        }
    ],


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

// --- RICH TOOLBAR & JOYSTICK LOGIC ---

// This crucial function stops the mobile keyboard from closing when you tap a toolbar button!
function preventFocus(e) {
    e.preventDefault();
}

function applyFormat(command) {
    if (currentMode === 'visual') {
        if (command === 'bold') document.execCommand('bold', false, null);
        else if (command === 'italic') document.execCommand('italic', false, null);
        else if (command === 'glitch') {
            const sel = window.getSelection();
            if (sel.rangeCount > 0 && sel.toString().length > 0) {
                // Wraps the selected text in our custom obfuscation CSS class
                document.execCommand('insertHTML', false, `<span class="mc-glitch">${sel.toString()}</span>`);
            } else {
                // Inserts a blocky placeholder if no text is highlighted
                document.execCommand('insertHTML', false, `<span class="mc-glitch">▒▒▒</span>`);
            }
        }
        else if (command === 'reset') {
            document.execCommand('removeFormat', false, null);
            document.execCommand('foreColor', false, '#000000');
        }
    } else {
        const code = command === 'bold' ? '§l' : command === 'italic' ? '§o' : command === 'glitch' ? '§k' : '§r';
        insertData(code, null, code);
    }
    saveSession();
}


function insertSymbol(char) {
    if (currentMode === 'visual') {
        document.execCommand('insertText', false, char);
    } else {
        insertData(char, null, null);
    }
    saveSession();
}


async function clipboardAction(action) {
    if (action === 'copy' || action === 'cut') {
        document.execCommand(action);
    } else if (action === 'paste') {
        try {
            // Mobile browsers require this modern API to paste text
            const text = await navigator.clipboard.readText();
            if (currentMode === 'visual') {
                document.execCommand('insertText', false, text);
            } else {
                insertData(text, null, null);
            }
        } catch (err) {
            alert("Clipboard access denied by your browser.");
        }
    }
    saveSession();
}

function moveCaret(direction, granularity) {
    if (currentMode === 'visual') {
        // Modern web API for moving the caret in a rich text editor
        const sel = window.getSelection();
        sel.modify('move', direction, granularity);
    } else {
        // Raw code editor (textarea) navigation
        let pos = rawEditor.selectionStart;
        if (direction === 'backward' && granularity === 'character') pos = Math.max(0, pos - 1);
        if (direction === 'forward' && granularity === 'character') pos = Math.min(rawEditor.value.length, pos + 1);
        
        // Rough line jumping for the raw textarea
        if (direction === 'backward' && granularity === 'line') {
            pos = rawEditor.value.lastIndexOf('\n', pos - 1);
            if (pos === -1) pos = 0;
        }
        if (direction === 'forward' && granularity === 'line') {
            const nextNL = rawEditor.value.indexOf('\n', pos);
            pos = nextNL === -1 ? rawEditor.value.length : nextNL + 1;
        }
        rawEditor.setSelectionRange(pos, pos);
    }
}


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
        // 1. Handle Plain Text
        if (node.nodeType === Node.TEXT_NODE) {
            rawText += node.textContent;
        }
        // 2. Handle HTML Elements (Spans, Fonts, Divs, etc.)
        else if (node.nodeType === Node.ELEMENT_NODE) {
            let prefix = "";
            let suffix = "";
            
            // Handle Line Breaks (Mobile browsers wrap new lines in DIV or P tags)
            if (node.tagName === 'DIV' || node.tagName === 'P') {
                if (rawText.length > 0) rawText += "\n";
            } else if (node.tagName === 'BR') {
                rawText += "\n";
            }
            
            let hexColor = null;
            
            // Failsafe 1: Look for legacy <font> tags generated by mobile execCommand
            if (node.tagName === 'FONT' && node.hasAttribute('color')) {
                hexColor = node.getAttribute('color').toLowerCase();
            }
            // Failsafe 2: Look for modern CSS style tags
            else if (node.style && node.style.color) {
                const rgbMatch = node.style.color.match(/\d+/g);
                if (rgbMatch && rgbMatch.length >= 3) {
                    hexColor = "#" + ((1 << 24) + (parseInt(rgbMatch[0]) << 16) + (parseInt(rgbMatch[1]) << 8) + parseInt(rgbMatch[2])).toString(16).slice(1).toLowerCase();
                }
            }
            
            // If we found a valid Minecraft color, apply the § code!
            if (hexColor && hexToCode[hexColor]) {
                prefix += hexToCode[hexColor];
                suffix = "§r";
            }
            
            // Handle Styles (Bold/Italic/Glitch)
            if (node.tagName === 'B' || node.tagName === 'STRONG' || (node.style && node.style.fontWeight === 'bold')) {
                prefix += "§l";
                suffix = "§r";
            }
            if (node.tagName === 'I' || node.tagName === 'EM' || (node.style && node.style.fontStyle === 'italic')) {
                prefix += "§o";
                suffix = "§r";
            }
            // NEW: Detect our custom Glitch class!
            if (node.className && node.className.includes('mc-glitch')) {
                prefix += "§k";
                suffix = "§r";
            }
            
            // Recursively dig deeper into nested formatting
            rawText += prefix + parseHTMLToRaw(node) + suffix;
        }
    }
    
    // Clean up messy stacked resets (e.g., §r§r§r) and trailing resets before line breaks
    return rawText.replace(/(§r)+/g, "§r").replace(/§r\n/g, "\n");
}


// Parse Bedrock string into rich HTML Spans
function parseRawToHTML(rawText) {
    if (!rawText) return "";
    let html = "";
    const lines = rawText.split('\n');
    
    // THE BEDROCK FIX: State variables are moved OUTSIDE the loop!
    // This perfectly mimics Bedrock's continuous string parsing across line breaks.
    let currentColor = '#000000';
    let isBold = false;
    let isItalic = false;
    
    lines.forEach((line, index) => {
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
                    // BEDROCK RULE: Applying a new color instantly wipes previous styles!
                    isBold = false;
                    isItalic = false;
                } else if (code === 'l') { isBold = true; }
                else if (code === 'o') { isItalic = true; }
                else if (code === 'r') {
                    currentColor = '#000000'; // Resets to un-dyed oak default
                    isBold = false;
                    isItalic = false;
                }
                i++; // Skip the code letter
            } else {
                currentSpan += line[i];
            }
        }
        flushSpan();
        
        // Wrap the compiled line in a div (unless it's the first line)
        html += (index > 0 ? "<div>" : "") + (lineHtml || "<br>") + (index > 0 ? "</div>" : "");
    });
    
    return html;
}




// --- MENU GENERATOR LOGIC ---
for (const [category, characters] of Object.entries(charDictionary)) {
    // NEW: Skip colors so they only appear in the dedicated UI!
    if (category === "Standard Colors" || category === "Material Colors") continue;
    
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
        if (item.fullWidth && displayChar.length > 25) displayChar = displayChar.substring(0, 22) + "...";
        
        innerHTML += `<span>${displayChar}</span> <small>${item.label}</small>`;
        charBtn.innerHTML = innerHTML;
        
        charBtn.onclick = () => {
            if (item.prompts) {
                openCustomPrompt(item); // Trigger the sleek new UI!
            } else {
                insertData(item.char, item.colorHex, item.char);
            }
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

// --- CUSTOM MODAL LOGIC ---
const modal = document.getElementById('customPromptModal');
const modalInputs = document.getElementById('modalInputs');
const modalConfirmBtn = document.getElementById('modalConfirmBtn');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const modalTitle = document.getElementById('modalTitle');

let currentTemplateItem = null;

function openCustomPrompt(item) {
    currentTemplateItem = item;
    modalTitle.innerText = item.label;
    modalInputs.innerHTML = ''; // Clear previous inputs
    
    // Build an input field for every prompt required by the template
    item.prompts.forEach((p, index) => {
        const group = document.createElement('div');
        group.className = 'modal-input-group';
        
        const label = document.createElement('label');
        label.innerText = p + ":";
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `modalInput_${index}`;
        input.placeholder = `Enter ${p}...`;
        
        group.appendChild(label);
        group.appendChild(input);
        modalInputs.appendChild(group);
    });
    
    modal.classList.add('active');
    // Focus the first input automatically after the modal opens
    setTimeout(() => document.getElementById('modalInput_0').focus(), 100);
}

function closeCustomPrompt() {
    modal.classList.remove('active');
    currentTemplateItem = null;
}

modalCancelBtn.onclick = closeCustomPrompt;

modalConfirmBtn.onclick = () => {
    if (!currentTemplateItem) return;
    
    let finalOutput = currentTemplateItem.char;
    
    // Grab the text from all the modal inputs and replace the placeholders
    currentTemplateItem.prompts.forEach((p, index) => {
        const inputVal = document.getElementById(`modalInput_${index}`).value;
        finalOutput = finalOutput.replace(`{${p}}`, inputVal || "");
    });
    
    insertData(finalOutput, currentTemplateItem.colorHex, currentTemplateItem.char);
    closeCustomPrompt();
    saveSession();
};


// --- WOOD SELECTOR LOGIC ---
function changeWoodType() {
    const woodSel = document.getElementById('woodType');
    visualEditor.setAttribute('data-wood', woodSel.value);
    saveSession();
}

// --- ENFORCE 4-LINE PHYSICAL LIMIT ---
visualEditor.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        // Compile the current HTML to raw text to accurately count the lines
        const currentRaw = parseHTMLToRaw(this);
        const lines = currentRaw.split('\n').length;
        
        // If we are already at 4 lines, block the Enter key!
        if (lines >= 4) {
            e.preventDefault();
            
            // Flash the sign border red to give the user physical feedback
            const originalBorder = this.style.borderColor;
            this.style.borderColor = '#AA0000'; // Minecraft Dark Red
            setTimeout(() => {
                this.style.borderColor = originalBorder;
            }, 150);
        }
    }
});


// --- HISTORY ENGINE & AUTO-SAVE ---
let historyStack = [];
let historyIndex = -1;

function pushHistory(data) {
    // If we undo and then make a new edit, erase the "future" redo history
    if (historyIndex < historyStack.length - 1) {
        historyStack = historyStack.slice(0, historyIndex + 1);
    }
    // Only push if the data actually changed
    if (historyStack[historyIndex] !== data) {
        historyStack.push(data);
        historyIndex++;
    }
}

function undoSession() {
    if (historyIndex > 0) {
        historyIndex--;
        restoreState(historyStack[historyIndex]);
    }
}

function redoSession() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        restoreState(historyStack[historyIndex]);
    }
}

function restoreState(data) {
    rawEditor.value = data;
    visualEditor.innerHTML = parseRawToHTML(data);
    localStorage.setItem('bedrockSignData', data); // Keep localStorage synced silently
}

function saveSession() {
    const data = currentMode === 'visual' ? parseHTMLToRaw(visualEditor) : rawEditor.value;
    const woodPreference = document.getElementById('woodType').value;
    
    localStorage.setItem('bedrockSignData', data);
    localStorage.setItem('bedrockSignWood', woodPreference);
    
    pushHistory(data);
}

function loadSession() {
    const savedData = localStorage.getItem('bedrockSignData') || "";
    const savedWood = localStorage.getItem('bedrockSignWood');
    
    if (savedWood) {
        document.getElementById('woodType').value = savedWood;
        visualEditor.setAttribute('data-wood', savedWood);
    } else {
        visualEditor.setAttribute('data-wood', 'oak');
    }
    
    restoreState(savedData);
    pushHistory(savedData); // Seed the initial state for the undo stack
}

function clearSign() {
    visualEditor.innerHTML = '';
    rawEditor.value = '';
    saveSession(); // Saves the clear action so you can undo it!
}

// Trigger the save function whenever you stop typing for 500ms
let timeoutId;
visualEditor.addEventListener('input', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(saveSession, 500);
});

rawEditor.addEventListener('input', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(saveSession, 500);
});

// Load any existing saved data when the app first boots up
window.addEventListener('DOMContentLoaded', loadSession);


// --- LONG PRESS TOOLTIP LOGIC ---
const tooltipEl = document.getElementById('mcTooltip');
let tooltipTimer;

document.querySelectorAll('[data-tip]').forEach(btn => {
    // Show tooltip after pressing for 400ms
    btn.addEventListener('touchstart', (e) => {
        tooltipTimer = setTimeout(() => {
            tooltipEl.innerText = btn.getAttribute('data-tip');
            tooltipEl.style.display = 'block';
            // Position it above the finger
            tooltipEl.style.left = Math.max(10, e.touches[0].clientX - 40) + 'px';
            tooltipEl.style.top = (e.touches[0].clientY - 90) + 'px';
        }, 400);
    });
    
    // Hide tooltip when finger lifts or slides away
    const hideTooltip = () => {
        clearTimeout(tooltipTimer);
        tooltipEl.style.display = 'none';
    };
    
    btn.addEventListener('touchend', hideTooltip);
    btn.addEventListener('touchcancel', hideTooltip);
    btn.addEventListener('touchmove', hideTooltip);
    
    // Crucial: Stop mobile browsers from popping up the "Right Click / Copy Image" menu on long press
    btn.addEventListener('contextmenu', (e) => e.preventDefault());
});

// --- COLOR PICKER ENGINE ---
let savedSelectionRange = null;
let savedRawStart = null;
let savedRawEnd = null;
let pendingColorHex = null;
let pendingColorCode = null;
let previewTextStr = "Sample Text";

function openColorPicker() {
    if (currentMode === 'visual') {
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            savedSelectionRange = sel.getRangeAt(0);
            const selectedText = savedSelectionRange.toString();
            previewTextStr = selectedText.length > 0 ? selectedText : "Sample Text";
        } else {
            previewTextStr = "Sample Text";
        }
    } else {
        savedRawStart = rawEditor.selectionStart;
        savedRawEnd = rawEditor.selectionEnd;
        const selectedText = rawEditor.value.substring(savedRawStart, savedRawEnd);
        previewTextStr = selectedText.length > 0 ? selectedText : "Sample Text";
    }

    const currentWood = document.getElementById('woodType').value;
    document.getElementById('colorPreviewSign').setAttribute('data-wood', currentWood);
    
    document.getElementById('colorPreviewSign').innerText = previewTextStr;
    document.getElementById('colorPreviewSign').style.color = '#000000';
    pendingColorHex = null;
    pendingColorCode = null;

    const container = document.getElementById('colorOptionsContainer');
    container.innerHTML = ''; 

    buildColorSection("Standard Colors", charDictionary["Standard Colors"], container);
    buildColorSection("Material Colors", charDictionary["Material Colors"], container);

    document.getElementById('colorPickerModal').classList.add('active');
}

function buildColorSection(title, colors, container) {
    const header = document.createElement('div');
    header.style.cssText = 'color: #333; font-size: 16px; margin: 10px 0 5px 0; text-shadow: 1px 1px 0px var(--mc-ui-border-light); border-bottom: 2px solid var(--mc-ui-border-dark); padding-bottom: 4px;';
    header.innerText = title;
    container.appendChild(header);

    const grid = document.createElement('div');
    grid.style.cssText = currentMode === 'visual' 
        ? 'display: grid; grid-template-columns: repeat(auto-fill, minmax(44px, 1fr)); gap: 6px;' 
        : 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;';
    
    colors.forEach(c => {
        const btn = document.createElement('div');
        if (currentMode === 'visual') {
            btn.className = 'color-btn-visual';
            btn.style.cssText = `width: 44px; height: 44px; background-color: ${c.colorHex}; border: 3px solid var(--mc-ui-black); box-shadow: inset 2px 2px 0px rgba(255,255,255,0.4), inset -2px -2px 0px rgba(0,0,0,0.4); cursor: pointer;`;
            btn.onclick = () => previewColor(btn, c.colorHex, c.char, true);
        } else {
            btn.className = 'color-btn-raw';
            btn.style.cssText = `display: flex; align-items: center; gap: 10px; background-color: var(--mc-ui-bg); border: 2px solid var(--mc-ui-black); padding: 6px; cursor: pointer; box-shadow: inset 2px 2px 0px var(--mc-ui-border-light), inset -2px -2px 0px var(--mc-ui-border-dark);`;
            
            // NEW: Added the fixed-width code span and the c.label span!
            btn.innerHTML = `
                <div style="width: 24px; height: 24px; border: 2px solid var(--mc-ui-black); background-color: ${c.colorHex}; flex-shrink: 0;"></div>
                <span style="font-family: 'MinecraftSeven', monospace; font-size: 18px; width: 24px; text-align: center;">${c.char}</span>
                <span style="font-family: 'MinecraftSeven', sans-serif; font-size: 14px; color: #333; line-height: 1.1;">${c.label}</span>
            `;
            
            btn.onclick = () => previewColor(btn, c.colorHex, c.char, false);
        }

        grid.appendChild(btn);
    });
    container.appendChild(grid);
}

function previewColor(btnElement, hex, code, isVisual) {
    document.querySelectorAll('.color-btn-visual, .color-btn-raw').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    pendingColorHex = hex;
    pendingColorCode = code;

    const preview = document.getElementById('colorPreviewSign');
    if (currentMode === 'visual') {
        preview.style.color = hex;
    } else {
        preview.innerText = code + previewTextStr;
        preview.style.color = hex;
    }
}

function applySelectedColor() {
    if (!pendingColorHex && !pendingColorCode) {
        closeColorPicker();
        return;
    }
    
    closeColorPicker();

    if (currentMode === 'visual') {
        const sel = window.getSelection();
        sel.removeAllRanges();
        if (savedSelectionRange) sel.addRange(savedSelectionRange);
        
        visualEditor.focus();
        document.execCommand('foreColor', false, pendingColorHex);
    } else {
        const selectedText = rawEditor.value.substring(savedRawStart, savedRawEnd);
        rawEditor.setSelectionRange(savedRawStart, savedRawEnd);
        rawEditor.focus();
        
        if (selectedText.length > 0) {
            // Multi-line safe wrap for raw mode
            const newText = pendingColorCode + selectedText.replace(/\n/g, '\n' + pendingColorCode) + '§r';
            insertData(newText, null, null); 
        } else {
            insertData(pendingColorCode, null, pendingColorCode);
        }
    }
    saveSession();
}

function closeColorPicker() {
    document.getElementById('colorPickerModal').classList.remove('active');
}


// --- DYNAMIC BUTTON ANIMATIONS ---
const colorToolBtn = document.getElementById('colorToolBtn');
const rainbowColors = ['#FF5555', '#FFAA00', '#FFFF55', '#55FF55', '#55FFFF', '#5555FF', '#FF55FF'];
let rainbowIndex = 0;

const glitchToolBtn = document.getElementById('glitchToolBtn');
const glitchChars = ['#', '%', '&', '?', '@', '$', 'X', '█', '▒'];

// Rainbow Color Cycler
setInterval(() => {
    if (colorToolBtn) {
        colorToolBtn.style.color = rainbowColors[rainbowIndex];
        colorToolBtn.style.textShadow = '1px 1px 0px #000';
        rainbowIndex = (rainbowIndex + 1) % rainbowColors.length;
    }
}, 800);

// True Minecraft Obfuscation (Glitch) Cycler
setInterval(() => {
    if (glitchToolBtn) {
        glitchToolBtn.innerText = glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
}, 50); // Cycles every 50ms for that erratic energy
