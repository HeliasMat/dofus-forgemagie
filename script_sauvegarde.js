const createStatsData = (name, runePuitValues, runeEffetValues, runeNames, overMax, singularPuitValue) => ({
    name,
    runes: {
        normal: { puit: runePuitValues[0], valeur: runeEffetValues[0], name: runeNames[0] },
        pa: { puit: runePuitValues[1], valeur: runeEffetValues[1], name: runeNames[1] },
        ra: { puit: runePuitValues[2], valeur: runeEffetValues[2], name: runeNames[2] }
    },
    maxValue: overMax, // Changed from maxValue to overMax
    singularPuitValue
});

const statsData = {
    Force: createStatsData("Force", [1, 3, 10], [1, 3, 10], ["Rune Fo (1).png", "Rune Pa Fo (3).png", "Rune Ra Fo (10).png"], 101, 1),
    Intelligence: createStatsData("Intelligence", [1, 3, 10], [1, 3, 10], ["Rune Ine (1).png", "Rune Pa Ine (3).png", "Rune Ra Ine (10).png"], 101, 1),
    Chance: createStatsData("Chance", [1, 3, 10], [1, 3, 10], ["Rune Cha (1).png", "Rune Pa Cha (3).png", "Rune Ra Cha (10).png"], 101, 1),
    Agilite: createStatsData("Agilité", [1, 3, 10], [1, 3, 10], ["Rune Age (1).png", "Rune Pa Age (3).png", "Rune Ra Age (10).png"], 101, 1),
    Vitalite: createStatsData("Vitalité", [1, 3, 10], [5, 15, 50], ["Rune Vi (1).png", "Rune Pa Vi (3).png", "Rune Ra Vi (10).png"], 505, 0.2),
    Initiative: createStatsData("Initiative", [1, 3, 10], [10, 30, 100], ["Rune Ini (1).png", "Rune Pa Ini (3).png", "Rune Ra Ini (10).png"], 1010, 0.1),
    Sagesse: createStatsData("Sagesse", [3, 9, 30], [1, 3, 10], ["Rune Sa (3).png", "Rune Pa Sa (9).png", "Rune Ra Sa (30).png"], 33, 3),
    Prospection: createStatsData("Prospection", [3, 9, "Inex"], [1, 3, "Inex"], ["Rune Prospe (3).png", "Rune Pa Prospe (9).png", "Inex"], 33, 3),
    Pod: createStatsData("Pod", [2.5, 7.5, 25], [10, 30, 100], ["Rune Pod (2.5).png", "Rune Pa Pod (7.5).png", "Rune Ra Pod (25).png"], 404, 0.25),
    Puissance: createStatsData("Puissance", [2, 6, 20], [1, 3, 10], ["Rune Pui (2).png", "Rune Pa Pui (6).png", "Rune Ra Pui (20).png"], 50, 2),
    Resistance_Terre: createStatsData("Résistance Terre", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Terre (2).png", "Rune Pa Ré Terre (6).png", "Inex"], 50, 2),
    Resistance_Feu: createStatsData("Résistance Feu", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Feu (2).png", "Rune Pa Ré Feu (6).png", "Inex"], 50, 2),
    Resistance_Eau: createStatsData("Résistance Eau", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Eau (2).png", "Rune Pa Ré Eau (6).png", "Inex"], 50, 2),
    Resistance_Air: createStatsData("Résistance Air", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Air (2).png", "Rune Pa Ré Air (6).png", "Inex"], 50, 2),
    Resistance_Neutre: createStatsData("Résistance Neutre", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Neutre (2).png", "Rune Pa Ré Neutre (6).png", "Inex"], 50, 2),
    Resistance_Pourcentage_Air: createStatsData("Résistance Pourcentage Air", [6, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Per Air (6).png", "Inex", "Inex"], 16, 6),
    Resistance_Pourcentage_Terre: createStatsData("Résistance Pourcentage Terre", [6, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Per Terre (6).png", "Inex", "Inex"], 16, 6),
    Resistance_Pourcentage_Feu: createStatsData("Résistance Pourcentage Feu", [6, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Per Feu (6).png", "Inex", "Inex"], 16, 6),
    Resistance_Pourcentage_Eau: createStatsData("Résistance Pourcentage Eau", [6, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Per Eau (6).png", "Inex", "Inex"], 16, 6),
    Resistance_Pourcentage_Neutre: createStatsData("Résistance Pourcentage Neutre", [6, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Per Neutre (6).png", "Inex", "Inex"], 16, 6),
    Resistance_Pousse: createStatsData("Résistance Poussée", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Pou (2).png", "Rune Pa Ré Pou (6).png", "Inex"], 50, 2),
    Resistance_Critique: createStatsData("Résistance Critique", [2, 6, "Inex"], [1, 3, "Inex"], ["Rune Ré Cri (2).png", "Rune Pa Ré Cri (6).png", "Inex"], 50, 2),
    Resistance_Pa: createStatsData("Résistance PA", [7, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Pa (7).png", "Inex", "Inex"], 14, 7),
    Resistance_Pm: createStatsData("Résistance PM", [7, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ré Pme (7).png", "Inex", "Inex"], 14, 7),
    Retrait_PA: createStatsData("Retrait PA", [7, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ret Pa (7).png", "Inex", "Inex"], 50, 2),
    Retrait_PM: createStatsData("Retrait PM", [7, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ret Pme (7).png", "Inex", "Inex"], 50, 2),
    Tacle: createStatsData("Tacle", [4, 12, "Inex"], [1, 3, "Inex"], ["Rune Tac (4).png", "Rune Pa Tac (12).png", "Inex"], 25, 4),
    Fuite: createStatsData("Fuite", [4, 12, "Inex"], [1, 3, "Inex"], ["Rune Fui (4).png", "Rune Pa Fui (12).png", "Inex"], 25, 4),
    Dommages: createStatsData("Dommages", [20, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Do (20).png", "Inex", "Inex"], 5, 20),
    Dommages_Terre: createStatsData("Dommages Terre", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Terre (5).png", "Rune Pa Do Terre (15).png", "Inex"], 20, 5),
    Dommages_Neutre: createStatsData("Dommages Neutre", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Neutre (5).png", "Rune Pa Do Neutre (15).png", "Inex"], 20, 5),
    Dommages_Feu: createStatsData("Dommages Feu", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Feu (5).png", "Rune Pa Do Feu (15).png", "Inex"], 20, 5),
    Dommages_Air: createStatsData("Dommages Air", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Air (5).png", "Rune Pa Do Air (15).png", "Inex"], 20, 5),
    Dommages_Eau: createStatsData("Dommages Eau", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Eau (5).png", "Rune Pa Do Eau (15).png", "Inex"], 20, 5),
    Dommages_Poussee: createStatsData("Dommages Poussée", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Pou (5).png", "Rune Pa Do Pou (15).png", "Inex"], 20, 5),
    Dommages_Critique: createStatsData("Dommages Critique", [5, 15, "Inex"], [1, 3, "Inex"], ["Rune Do Cri (5).png", "Rune Pa Do Cri (15).png", "Inex"], 20, 5),
    Soin: createStatsData("Soin", [10, 30, "Inex"], [1, 3, "Inex"], ["Rune So (10).png", "Rune Pa So (30).png", "Inex"], 20, 10),
    Invocation: createStatsData("Invocation", [30, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Invo (30).png", "Inex", "Inex"], 1, 30),
    Critique: createStatsData("Critique", [10, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Cri (10).png", "Inex", "Inex"], 15, 10),
    PA: createStatsData("PA", [100, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ga Pa (100).png", "Inex", "Inex"], 1, 100),
    PM: createStatsData("PM", [90, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Ga Pme (90).png", "Inex", "Inex"], 1, 90),
    Portee: createStatsData("Portée", [51, "Inex", "Inex"], [1, "Inex", "Inex"], ["Rune Po (51).png", "Inex", "Inex"], 6, 51)
};

let statsObject = {
    Force: { min: 40, max: 60, valeur: 50, over: 0, native: true },
    Intelligence: { min: 40, max: 60, valeur: 50, over: 0, native: true },
    Chance: { min: 40, max: 60, valeur: 50, over: 0, native: true },
    Agilite: { min: 40, max: 60, valeur: 50, over: 0, native: true },
    Vitalite: { min: 250, max: 300, valeur: 275, over: 0, native: true },
    Initiative: { min: 800, max: 1000, valeur: 900, over: 0, native: true },
    Sagesse: { min: 30, max: 45, valeur: 35, over: 0, native: true },
    Prospection: { min: 7, max: 15, valeur: 10, over: 0, native: true },
    Puissance: { min: 20, max: 30, valeur: 25, over: 0, native: true },
    Pod: { min: 100, max: 400, valeur: 250, over: 0, native: true },
    Dommages: { min: 1, max: 5, valeur: 3, over: 0, native: true },
    Invocation: { min: 1, max: 1, valeur: 1, over: 0, native: true },
    Critique: { min: 4, max: 6, valeur: 5, over: 0, native: true },
    PA: { min: 1, max: 2, valeur: 2, over: 0, native: true },
    PM: { min: 1, max: 2, valeur: 2, over: 0, native: true },
    Portee: { min: 1, max: 2, valeur: 1, over: 0, native: true },
    puits: 0,
    generalOver: 0
};

let statsObject2 = {
    Resistance_Pourcentage_Neutre: {min: 0, max: 8, valeur: 4, over: 0, native: true},
    Prospection: { min: 7, max: 15, valeur: 10, over: 0, native: true },
    Puissance: { min: 20, max: 30, valeur: 25, over: 0, native: true },
    Pod: { min: 100, max: 400, valeur: 250, over: 0, native: true },
    Dommages: { min: 1, max: 5, valeur: 3, over: 0, native: true },
    Invocation: { min: 1, max: 1, valeur: 1, over: 0, native: true },
    Critique: { min: 4, max: 6, valeur: 5, over: 0, native: true },
    PA: { min: 1, max: 2, valeur: 2, over: 0, native: true },
    PM: { min: 1, max: 2, valeur: 2, over: 0, native: true },
    Portee: { min: 1, max: 2, valeur: 1, over: 0, native: true },
    puits: 0,
    generalOver: 0
};

// Constants
const CRITICAL_SUCCESS_CHANCE = 0.10;
const FAILURE_CHANCE = 0.30;


class Item {
    constructor(name, level, stats) {
        this.name = name;
        this.level = level;
        this.stats = { ...stats };
        this.modifications = {};
    }

    updateStat(stat, value) {
        if (this.stats[stat]) {
            this.stats[stat].valeur = value;
            this.updateOverflow(stat);
        }
    }

    updateOverflow(stat) {
        const statInfo = this.stats[stat];
        const maxValue = statsData[stat].overMax;
        if (statInfo.valeur > statInfo.max) {
            statInfo.over = statInfo.valeur - statInfo.max;
            if (statInfo.valeur > maxValue) {
                statInfo.valeur = maxValue;
                statInfo.over = maxValue - statInfo.max;
            }
        } else {
            statInfo.over = 0;
        }
    }

    updateModification(stat, value) {
        if (!this.modifications[stat]) {
            this.modifications[stat] = 0;
        }
        this.modifications[stat] += value;
    }

    clearModifications() {
        this.modifications = {};
    }

    getPuits() {
        return this.stats.puits || 0;
    }

    updatePuits(value) {
        this.stats.puits = Math.max(0, (this.stats.puits || 0) + value);
    }

    getGeneralOver() {
        return Object.entries(this.stats)
            .filter(([key, stat]) => 
                typeof stat === 'object' && 
                key !== 'puits' && 
                key !== 'generalOver' &&
                statsData.hasOwnProperty(key)
            )
            .reduce((sum, [key, stat]) => {
                const singularPuitValue = statsData[key]?.singularPuitValue || 0;
                return sum + (stat.over || 0) * singularPuitValue;
            }, 0);
    }
}

class GameState {
    constructor(initialStats, infoStats) {
        this.stats = initialStats;
        this.infoStats = infoStats;
        this.runeHistory = [];
    }

    updateStat(stat, value) {
        if (this.stats[stat]) {
            const maxValue = statsData[stat].overMax;
            this.stats[stat].valeur = value;
            this.updateOverflow(stat);
        }
    }

    updateOverflow(stat) {
        const statInfo = this.stats[stat];
        const maxValue = statsData[stat].overMax;
        if (statInfo.valeur > statInfo.max) {
            statInfo.over = statInfo.valeur - statInfo.max;
            if (statInfo.valeur > maxValue) {
                statInfo.valeur = maxValue;
                statInfo.over = maxValue - statInfo.max;
            }
        } else {
            statInfo.over = 0;
        }
    }

    updatePuits(value) {
        this.stats.puits = Math.max(0, this.stats.puits + value);
    }

    updateGeneralOver() {
        this.stats.generalOver = Object.entries(this.stats)
            .filter(([key, stat]) => 
                typeof stat === 'object' && 
                key !== 'puits' && 
                key !== 'generalOver' &&
                statsData.hasOwnProperty(key)
            )
            .reduce((sum, [key, stat]) => {
                const singularPuitValue = statsData[key]?.singularPuitValue || 0;
                return sum + (stat.over || 0) * singularPuitValue;
            }, 0);
    }

    addRuneHistory(stat, type, outcomeMessage) {
        this.runeHistory.push({ stat, type, outcomeMessage });
    }
}


class UI {
    constructor(gameState) {
        this.gameState = gameState;
        this.elements = {
            statGrid: document.getElementById('statGrid'),
            puitsValue: document.getElementById('puitsValue'),
            items: document.getElementById('items'),
            runeHistory: document.getElementById('runeHistory'),
            fusionnerToutButton: document.getElementById('fusionnerTout'),
            fusionnerButton: document.getElementById('fusionner'),
            overValue: document.getElementById('overValue'),
            itemPlaceholder: document.getElementById('itemPlaceholder') // Add this line
        };
        this.elements.runeListToggle = document.getElementById('runeListToggle');
        this.elements.selectedRuneText = document.getElementById('selectedRuneText');
        this.elements.selectedRune = document.getElementById('selectedRune');
        this.elements.selectedRuneImage = document.getElementById('selectedRuneImage');
        this.elements.selectedRuneName = document.getElementById('selectedRuneName');
        this.elements.runeList = document.getElementById('runeList');
        this.setupRuneList();
    }

    createElement(tag, className, textContent, draggable) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (draggable) element.draggable = true;
        if (textContent) element.textContent = textContent;
        return element;
    }

    updateElement(id, textContent) {
        if (this.elements[id]) this.elements[id].textContent = textContent;
    }

    createRunePlaceholder(stat, type, runeInfo) {
        if (runeInfo && runeInfo.runes[type].puit !== "Inex" && runeInfo.runes[type].valeur !== "Inex") {
            return `<div class="stat"><div class="rune-placeholder" data-stat="${stat}" data-type="${type}"><img src="images/${runeInfo.runes[type].name}"></div></div>`;
        }
        return '<div class="stat"></div>';
    }

    updateStatGrid() {
        this.elements.statGrid.innerHTML = '';
        const headerRow = this.createStatRow('header', { min: 'Min', max: 'Max', valeur: 'Effets', modif: 'Modif.' });
        this.elements.statGrid.appendChild(headerRow);

        Object.entries(this.gameState.stats)
            .filter(([key]) => key !== 'puits' && key !== 'generalOver')
            .forEach(([stat, values]) => {
                this.elements.statGrid.appendChild(this.createStatRow(stat, values));
            });
    }

    createStatRow(stat, values) {
        const row = this.createElement('div', 'stat-row');
        if (stat === 'header') {
            row.innerHTML = `
            <div class="stat">${values.min}</div>
            <div class="stat">${values.max}</div>
            <div class="stat">${values.valeur}</div>
            <div class="stat">${values.modif}</div>
            <div class="stat"></div>
            <div class="stat">Pa</div>
            <div class="stat">Ra</div>
        `;
        } else {
            const statinfo = this.gameState.infoStats[stat] || {
                runes: { normal: {}, pa: {}, ra: {} }
            };
            const belowMinText = values.native && values.valeur < values.min ? ` (${values.valeur - values.min})` : '';
            const aboveMaxText = values.native && values.valeur > values.max ? ` (+${values.valeur - values.max})` : '';
            const valueClass = values.native ? 
                (values.valeur < values.min ? 'below-min' : values.valeur > values.max ? 'above-max' : 'in-range') :
                '';

            const nameStyle = values.valeur === 0 ? 'style="color: gray;"' : '';
            
            row.innerHTML = `
                <div class="stat">${values.native ? values.min : '-'}</div>
                <div class="stat">${values.native ? values.max : '-'}</div>
                <div class="stat ${valueClass}">
                    ${values.valeur}${belowMinText}${aboveMaxText} ${stat}
                </div>
                <div class="stat" id="${stat}-modif"></div>
                ${this.createRunePlaceholder(stat, 'normal', statinfo)}
                ${this.createRunePlaceholder(stat, 'pa', statinfo)}
                ${this.createRunePlaceholder(stat, 'ra', statinfo)}
            `;

            if (values.valeur == 0) {
                row.innerHTML = `
                <div class="stat">${values.native ? values.min : '-'}</div>
                <div class="stat">${values.native ? values.max : '-'}</div>
                <div class="stat ${valueClass}" ${nameStyle}>${stat}</div>
                <div class="stat" id="${stat}-modif"></div>
                ${this.createRunePlaceholder(stat, 'normal', statinfo)}
                ${this.createRunePlaceholder(stat, 'pa', statinfo)}
                ${this.createRunePlaceholder(stat, 'ra', statinfo)}
            `;
            }
        }
        return row;
    }

    updateRuneHistory(stat, type, outcomeMessage) {
        const historyItem = this.createElement('div', '', `${outcomeMessage} ${stat} ${type}`);
        this.elements.runeHistory.appendChild(historyItem);
        this.elements.runeHistory.scrollTop = this.elements.runeHistory.scrollHeight;
    }

    updateitems() {
        this.elements.items.innerHTML = '';
        const dummyitems = [107, 140, 88, 29, 263, 51, 70, 67];
        dummyitems.forEach(count => {
            const div = this.createElement('div', 'item', count, true);
            this.elements.items.appendChild(div);
        });
    }

    updatePuits() {
        this.updateElement('puitsValue', this.gameState.stats.puits);
    }

    updateOver() {
        this.updateElement('overValue', this.gameState.stats.generalOver);
    }

    updateStatModifications(affectedStat, value) {
        if (!this.gameState.stats[affectedStat].modifications) {
            this.gameState.stats[affectedStat].modifications = {};
        }
        this.gameState.stats[affectedStat].modifications[affectedStat] = (this.gameState.stats[affectedStat].modifications[affectedStat] || 0) + value;
        this.updateModificationDisplay(affectedStat);
    }

    updateModificationDisplay(stat) {
        const modifElement = document.getElementById(`${stat}-modif`);
        if (modifElement) {
            const modifications = this.gameState.stats[stat].modifications;
            let totalModif = 0;
            let modifText = '';
    
            if (modifications) {
                Object.entries(modifications).forEach(([modStat, value]) => {
                    totalModif += value;
                    if (value !== 0) {
                        modifText += `${value > 0 ? '+' : ''}${value}<br>`;
                    }
                });
            }
    
            modifElement.innerHTML = totalModif !== 0 ? `${totalModif > 0 ? '+' : ''}${totalModif}` : '';
            modifElement.className = 'stat ' + (totalModif > 0 ? 'positive' : totalModif < 0 ? 'negative' : '');
    
            const statRow = modifElement.closest('.stat-row');
            if (statRow) {
                if (totalModif > 0) {
                    statRow.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
                } else if (totalModif < 0) {
                    statRow.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                } else {
                    statRow.style.backgroundColor = '';
                }
            }
        }
    }

    clearModificationDisplay() {
        Object.keys(this.gameState.stats)
            .filter(stat => this.gameState.stats[stat].native)
            .forEach(stat => {
                const modifElement = document.getElementById(`${stat}-modif`);
                if (modifElement) {
                    modifElement.innerHTML = '';
                    modifElement.className = 'stat';
                    const statRow = modifElement.closest('.stat-row');
                    if (statRow) {
                        statRow.style.backgroundColor = '';
                    }
                }
            });
    }

    setupRuneList() {
        this.elements.runeListToggle.addEventListener('click', () => {
            this.elements.runeList.classList.toggle('hidden');
        });

        const allRunes = this.getAllRunes();
        allRunes.forEach(rune => {
            const runeItem = this.createElement('div', 'rune-item');
            const runeImg = this.createElement('img');
            runeImg.src = `images/${rune.imageName}`;
            runeImg.alt = rune.name;
            const runeName = this.createElement('span', '', rune.name);
            runeItem.appendChild(runeImg);
            runeItem.appendChild(runeName);
            runeItem.addEventListener('click', () => this.selectRune(rune));
            this.elements.runeList.appendChild(runeItem);
        });
    }

    selectRune(rune) { 
        this.selectedRune = rune;
        this.elements.selectedRuneImage.classList.remove('hidden');
        this.elements.selectedRuneText.classList.add('hidden');
        this.elements.selectedRune.classList.remove('hidden');
        this.elements.selectedRuneImage.src = `images/${rune.imageName}`;
        this.elements.selectedRuneImage.alt = rune.name;
        this.elements.selectedRuneName.textContent = rune.name;
        this.elements.runeList.classList.add('hidden');
    }

    getAllRunes() {
        const runes = [];
        Object.entries(this.gameState.infoStats).forEach(([statName, statInfo]) => {
            Object.entries(statInfo.runes).forEach(([runeType, runeInfo]) => {
                if (runeInfo.name !== "Inex") {
                    runes.push({
                        name: `${statName} ${runeType}`,
                        imageName: runeInfo.name,
                        stat: statName,
                        type: runeType
                    });
                }
            });
        });
        return runes;
    }

    updateAll() {
        this.updateStatGrid();
        this.updatePuits();
        this.updateitems();
        this.updateOver();
        Object.keys(this.gameState.stats).forEach(stat => {
            if (this.gameState.stats[stat].native) {
                this.updateModificationDisplay(stat);
            }
        });
    }
}
class Game {
    constructor(statsObject, statsData) {
        this.gameState = new GameState(statsObject, statsData);
        this.ui = new UI(this.gameState);
    }

    init() {
        this.ui.updateAll();
        this.addEventListeners();
        this.setupDragAndDrop();
    }

    addEventListeners() {
        this.ui.elements.statGrid.addEventListener('click', this.handleRuneClick.bind(this));
        this.ui.elements.fusionnerToutButton.addEventListener('click', this.fusionnerTout.bind(this));
        this.ui.elements.fusionnerButton.addEventListener('click', this.fusionner.bind(this));
    }

    setupDragAndDrop() {
        const items = document.querySelectorAll('.item');
        const itemPlaceholder = this.ui.elements.itemPlaceholder;

        items.forEach(item => {
            item.setAttribute('draggable', 'true');
            item.addEventListener('dragstart', this.dragStart.bind(this));
        });

        itemPlaceholder.addEventListener('dragover', this.dragOver.bind(this));
        itemPlaceholder.addEventListener('drop', this.drop.bind(this));
    }

    dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    }

    dragOver(e) {
        e.preventDefault();
    }

    drop(e) {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('text');
        this.startNewGame(itemId);
    }

    startNewGame(itemId) {
        console.log(`Starting new game with item ID: ${itemId}`);
        // Reset game state
        this.gameState = new GameState(statsObject2, statsData);
        // TODO: Apply item effects based on itemId
        this.ui.gameState = this.gameState;
        this.ui.updateAll();
        this.ui.elements.itemPlaceholder.textContent = `Item: ${itemId}`;
    }

    handleRuneClick(event) {
        const runePlaceholder = event.target.closest('.rune-placeholder');
        if (runePlaceholder) {
            const { stat, type } = runePlaceholder.dataset;
            this.applyRune(stat, type);
        }
    }

    applyRune(stat, runeType) {
        const statInfo = this.gameState.stats[stat];
        const runeInfo = this.gameState.infoStats[stat];
    
        if (!statInfo || !runeInfo) {
            console.error(`Invalid stat: ${stat}`);
            return;
        }
    
        const puitCost = runeInfo.runes[runeType].puit;
        const runeValue = runeInfo.runes[runeType].valeur;
    
        if (puitCost === "Inex" || runeValue === "Inex") {
            console.log(`${runeType} rune doesn't exist for ${stat}`);
            return;
        }
    
        const maxValue = runeInfo.maxValue;
    
        this.ui.clearModificationDisplay();
        this.clearGameStateModifications();
        
        const oldValue = statInfo.valeur;
        const { outcomeMessage, appliedValue, puitsLoss } = this.determineRuneOutcome(stat, runeType, runeValue, puitCost, oldValue, maxValue);
    
        this.gameState.updateStat(stat, oldValue + appliedValue);
        const actualChange = this.gameState.stats[stat].valeur - oldValue;
    
        this.handlePuitsLoss(stat, puitsLoss);
    
        this.gameState.addRuneHistory(stat, runeType, outcomeMessage);
        this.ui.updateRuneHistory(stat, runeType, outcomeMessage);
        this.ui.updateStatModifications(stat, actualChange);
        this.gameState.updateGeneralOver();
        this.ui.updateAll();
    }

    determineRuneOutcome(stat, runeType, runeValue, puitCost, currentValue, maxValue) {
        const roll = Math.random();
        const wouldExceedMax = currentValue + runeValue > maxValue;

        if (wouldExceedMax) {
            return { outcomeMessage: "Failure (Exceeds maximum)", appliedValue: 0, puitsLoss: puitCost };
        }

        if (roll < CRITICAL_SUCCESS_CHANCE) {
            return { outcomeMessage: "Critical success", appliedValue: runeValue, puitsLoss: 0 };
        } else if (roll < CRITICAL_SUCCESS_CHANCE + FAILURE_CHANCE) {
            return { outcomeMessage: "Failure", appliedValue: 0, puitsLoss: puitCost };
        } else {
            return { outcomeMessage: "Success", appliedValue: runeValue, puitsLoss: puitCost };
        }
    }

    handlePuitsLoss(statAffected, puitsLoss) {
        const currentPuits = this.gameState.stats.puits;
        const actualPuitsLoss = Math.min(currentPuits, puitsLoss);
        
        this.gameState.updatePuits(-actualPuitsLoss);

        if (actualPuitsLoss < puitsLoss) {
            const excessLoss = puitsLoss - actualPuitsLoss;
            this.distributeExcessLoss(statAffected, excessLoss);
        }
    }

    distributeExcessLoss(statAffected, excessLoss) {
        const eligibleStats = Object.keys(this.gameState.stats).filter(stat => 
            stat !== 'puits' && 
            stat !== 'generalOver' && 
            stat !== statAffected &&
            this.gameState.stats[stat].valeur > 0 &&
            this.gameState.stats[stat].native
        );
    
        while (excessLoss > 0 && eligibleStats.length > 0) {
            const weights = this.calculateWeights(eligibleStats);
            const selectedStat = this.weightedRandomSelection(eligibleStats, weights);
            const statinfo = statsData[selectedStat];
    
            const puitCost = statinfo.singularPuitValue;
            const runeValue = 1;     
    
            if (puitCost <= excessLoss) {
                const newValue = Math.max(0, this.gameState.stats[selectedStat].valeur - runeValue);
                const actualChange = newValue - this.gameState.stats[selectedStat].valeur;
                this.gameState.updateStat(selectedStat, newValue);
                excessLoss -= puitCost;
                this.ui.updateStatModifications(selectedStat, actualChange);
            } else {
                eligibleStats.splice(eligibleStats.indexOf(selectedStat), 1);
            }
        }
    }

    calculateWeights(eligibleStats) {
        return eligibleStats.map(stat => {
            const { min, max, valeur } = this.gameState.stats[stat];
            const range = max - min;
            const normalizedValue = (valeur - min) / range;
            
            if (valeur > max) {
                return 2; // Highest weight for values above natural range
            } else if (valeur < min) {
                return 0.5; // Lower weight for values below natural range, but still possible
            } else {
                return 0.5 + normalizedValue; // Weight increases linearly within natural range
            }
        });
    }

    weightedRandomSelection(items, weights) {
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        if (totalWeight === 0) {
            return items[Math.floor(Math.random() * items.length)];
        }
        
        let random = Math.random() * totalWeight;
        
        for (let i = 0; i < items.length; i++) {
            random -= weights[i];
            if (random <= 0) {
                return items[i];
            }
        }
        
        return items[items.length - 1]; // Fallback in case of rounding errors
    }

    clearGameStateModifications() {
        Object.keys(this.gameState.stats).forEach(stat => {
            if (this.gameState.stats[stat].native) {
                this.gameState.stats[stat].modifications = {};
            }
        });
    }

    fusionnerTout() {
        console.log("Fusionner tout clicked");
        // TODO: Implement fusion logic
    }

    fusionner() {
        if (!this.ui.selectedRune) {
            console.log("No rune selected");
            return;
        }

        const { stat, type } = this.ui.selectedRune;
        
        // Check if the stat exists in the game state
        if (!this.gameState.stats.hasOwnProperty(stat)) {
            this.addNewStat(stat);
        }

        this.applyRune(stat, type);

        // Update the UI after applying the rune
        this.ui.updateAll();
    }

    addNewStat(stat) {
        // Add the new stat to the game state
        this.gameState.stats[stat] = {
            min: 0,
            max: Infinity,
            valeur: 0,
            over: 0,
            native: false,
            modifications: {}
        };

        // Ensure the stat exists in infoStats
        if (!this.gameState.infoStats[stat]) {
            this.gameState.infoStats[stat] = {
                runes: {
                    normal: { puit: 1, valeur: 1, name: "Unknown.png" },
                    pa: { puit: 3, valeur: 3, name: "Unknown.png" },
                    ra: { puit: 10, valeur: 10, name: "Unknown.png" }
                },
                maxValue: Infinity,
                singularPuitValue: 1
            };
        }

        // Update the UI to include the new stat
        this.ui.updateStatGrid();
    }
}

// Initialize the game
const game = new Game(statsObject, statsData);
game.init();