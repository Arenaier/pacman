
const TILE_SIZE = 32;
// 1 = Wall, 0 = Dot, 2 = Power Pellet, 3 = Empty, 4 = Pacman, 5 = Ghost
const MAPS = [
    // MAP 1 - Classic
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 2, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 2, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 3, 1, 3, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 1, 1, 1],
        [3, 3, 3, 3, 0, 1, 3, 5, 5, 5, 5, 5, 3, 1, 0, 3, 3, 3, 3],
        [1, 1, 1, 1, 0, 1, 3, 5, 5, 5, 5, 5, 3, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 3, 1, 1, 1, 1, 1, 3, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 2, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, 2, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    // MAP 2 - Cross
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 3, 3, 5, 3, 3, 1, 0, 1, 1, 1, 0, 1],
        [3, 0, 0, 0, 0, 0, 0, 3, 5, 3, 5, 3, 0, 0, 0, 0, 0, 0, 3],
        [1, 0, 1, 1, 1, 0, 1, 3, 3, 5, 3, 3, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    // MAP 3 - Spiral
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 5, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [3, 0, 0, 0, 1, 0, 1, 0, 5, 3, 5, 0, 1, 0, 1, 0, 0, 0, 3],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 5, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
];

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentMap = MAPS[0];
        this.canvas.width = this.currentMap[0].length * TILE_SIZE;
        this.canvas.height = this.currentMap.length * TILE_SIZE;

        this.score = 0;
        this.lives = 10;
        this.level = 1;
        this.isGameOver = false;
        this.isResetting = false; // Added this line
        this.powerTimeRemaining = 0;

        this.pacman = null;
        this.ghosts = [];
        this.walls = [];
        this.dots = [];
        this.powerPellets = [];
        this.pacmanStartPosition = { x: 0, y: 0 };

        // Initialize Audio
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.initSounds();
        this.bgMusicInterval = null;

        this.init();
        document.getElementById('score').innerText = this.score;
        document.getElementById('level').innerText = this.level;
        document.getElementById('lives').innerText = this.lives;
        this.bindEvents();
        this.lastTime = 0;
        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);

        window.addEventListener('resize', () => this.handleResize());
        this.handleResize();
    }

    handleResize() {
        // Just ensuring the container is centered and takes space
        // The CSS object-fit: contain handles the actual scaling
    }

    generateRandomMap() {
        const rows = 19;
        const cols = 19;
        const map = [];

        // Initialize with all walls
        for (let r = 0; r < rows; r++) {
            map[r] = new Array(cols).fill(1);
        }

        // Maze Grid: 9x9 cells (at odd indices)
        const cellRows = 9;
        const cellCols = 5; // Left half for symmetry
        const visited = Array.from({ length: cellRows }, () => new Array(cellCols).fill(false));

        const walk = (r, c) => {
            visited[r][c] = true;
            map[2 * r + 1][2 * c + 1] = 0;

            const dirs = [
                { dr: -1, dc: 0 }, { dr: 1, dc: 0 },
                { dr: 0, dc: -1 }, { dr: 0, dc: 1 }
            ].sort(() => Math.random() - 0.5);

            for (const { dr, dc } of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < cellRows && nc >= 0 && nc < cellCols && !visited[nr][nc]) {
                    // Remove wall between
                    map[2 * r + 1 + dr][2 * c + 1 + dc] = 0;
                    walk(nr, nc);
                }
            }
        };

        walk(0, 0);

        // Mirror the map horizontally
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < Math.floor(cols / 2); c++) {
                map[r][cols - 1 - c] = map[r][c];
            }
        }

        const midR = Math.floor(rows / 2);
        const midC = Math.floor(cols / 2);

        // Ensure vertical connectivity in the middle
        for (let r = 1; r < rows - 1; r++) {
            if (map[r][midC - 1] === 0 || map[r][midC + 1] === 0) {
                map[r][midC] = 0;
            }
        }

        // Ghost Spawns (Clustered in the center)
        const ghostPoints = [
            { r: midR, c: midC },
            { r: midR, c: midC - 1 },
            { r: midR, c: midC + 1 },
            { r: midR - 1, c: midC },
            { r: midR + 1, c: midC }
        ];
        ghostPoints.forEach(p => {
            map[p.r][p.c] = 5;
        });

        // Pacman Spawn (bottom center)
        map[rows - 2][midC] = 4;

        // Tunnels (horizontal center)
        map[midR][0] = 3;
        map[midR][cols - 1] = 3;
        map[midR][1] = 0;
        map[midR][cols - 2] = 0;

        // Power Pellets (exactly 4, near corners)
        map[1][1] = 2;
        map[1][cols - 2] = 2;
        map[rows - 2][1] = 2;
        map[rows - 2][cols - 2] = 2;

        return map;
    }

    init() {
        this.walls = [];
        this.dots = [];
        this.powerPellets = [];
        this.ghosts = [];
        this.ghostSpawnPoints = [];
        this.pacman = null;

        // GENERATE RANDOM MAP
        this.currentMap = this.generateRandomMap();

        // Update canvas dimensions based on new map
        this.canvas.width = this.currentMap[0].length * TILE_SIZE;
        this.canvas.height = this.currentMap.length * TILE_SIZE;

        for (let row = 0; row < this.currentMap.length; row++) {
            for (let col = 0; col < this.currentMap[row].length; col++) {
                const type = this.currentMap[row][col];
                if (type === 1) {
                    this.walls.push(new Wall(col * TILE_SIZE, row * TILE_SIZE, this));
                } else if (type === 0) {
                    this.dots.push(new Dot(col * TILE_SIZE, row * TILE_SIZE));
                } else if (type === 2) {
                    this.powerPellets.push(new PowerPellet(col * TILE_SIZE, row * TILE_SIZE));
                } else if (type === 4) {
                    this.pacmanStartPosition = { x: col * TILE_SIZE, y: row * TILE_SIZE };
                    this.pacman = new Pacman(col * TILE_SIZE, row * TILE_SIZE, this);
                } else if (type === 5) {
                    this.ghostSpawnPoints.push({ x: col * TILE_SIZE, y: row * TILE_SIZE });
                }
            }
        }

        this.spawnGhosts();

        // Play intro music (only if user interacted)
        if (this.audioContext && this.audioContext.state === 'running') {
            const previousIsGameOver = this.isGameOver;
            this.isGameOver = true; // Pause movement
            this.playIntroMusic();
            setTimeout(() => {
                this.isGameOver = previousIsGameOver;
            }, 4500); // Intro music duration
        }
    }

    spawnGhosts() {
        this.ghosts = [];
        const numGhosts = 5 + Math.floor((this.level - 1) / 2);
        for (let i = 0; i < numGhosts; i++) {
            const spawn = this.ghostSpawnPoints[i % this.ghostSpawnPoints.length];
            if (spawn) {
                this.ghosts.push(new Ghost(spawn.x, spawn.y, this, i));
            }
        }
    }

    resetPositions() {
        this.pacman.x = this.pacmanStartPosition.x + TILE_SIZE / 2;
        this.pacman.y = this.pacmanStartPosition.y + TILE_SIZE / 2;
        this.pacman.dir = { x: 0, y: 0 };
        this.pacman.nextDir = { x: 0, y: 0 };
        this.spawnGhosts();
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            if (this.pacman) this.pacman.handleKey(e);
            if (this.isGameOver && e.code === 'Space') {
                location.reload();
            }
        });

        // Mobile Control Selection Logic
        if (window.innerWidth <= 768) {
            // Show selection modal
            const selectionModal = document.getElementById('mobile-control-select');
            selectionModal.classList.remove('hidden');

            // Allow time for everything to init, then pause game logic until selection
            this.isGameOver = true; // Temporary pause

            document.getElementById('select-buttons').addEventListener('click', () => {
                selectionModal.classList.add('hidden');
                document.querySelector('.mobile-controls').classList.add('active');
                this.initMobileButtons();
                this.isGameOver = false; // Resume
                this.startBackgroundMusic();
            });

            document.getElementById('select-swipe').addEventListener('click', () => {
                selectionModal.classList.add('hidden');
                this.initSwipeControls();
                this.isGameOver = false; // Resume
                this.startBackgroundMusic();
            });
        }
    }

    initMobileButtons() {
        // Mobile Controls - Buttons
        const btnUp = document.getElementById('btn-up');
        const btnDown = document.getElementById('btn-down');
        const btnLeft = document.getElementById('btn-left');
        const btnRight = document.getElementById('btn-right');

        const handleMobileInput = (direction) => {
            if (this.pacman) {
                this.pacman.nextDir = direction;
            }
        };

        const addBtnListener = (btn, dir) => {
            if (!btn) return;
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                handleMobileInput(dir);
            }, { passive: false });

            btn.addEventListener('click', (e) => {
                handleMobileInput(dir);
            });
        };

        addBtnListener(btnUp, { x: 0, y: -1 });
        addBtnListener(btnDown, { x: 0, y: 1 });
        addBtnListener(btnLeft, { x: -1, y: 0 });
        addBtnListener(btnRight, { x: 1, y: 0 });
    }

    initSwipeControls() {
        let touchStartX = 0;
        let touchStartY = 0;
        const sensitivity = 30; // Min pixels for a swipe

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: false });

        document.addEventListener('touchmove', (e) => {
            // Prevent default scrolling when swiping
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                // Horizontal Swipe
                if (Math.abs(diffX) > sensitivity) {
                    if (diffX > 0) {
                        this.pacman.nextDir = { x: 1, y: 0 }; // Right
                    } else {
                        this.pacman.nextDir = { x: -1, y: 0 }; // Left
                    }
                }
            } else {
                // Vertical Swipe
                if (Math.abs(diffY) > sensitivity) {
                    if (diffY > 0) {
                        this.pacman.nextDir = { x: 0, y: 1 }; // Down
                    } else {
                        this.pacman.nextDir = { x: 0, y: -1 }; // Up
                    }
                }
            }
        });
    }

    animate(timestamp) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.ctx.fillStyle = '#050505';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (!this.isGameOver) {
            this.update();
        }

        this.draw();
        requestAnimationFrame(this.animate);
    }

    update() {
        if (this.pacman) this.pacman.update();
        this.ghosts.forEach(g => g.update());

        // Check level completion
        if (this.dots.length === 0 && this.powerPellets.length === 0) {
            this.level++;
            document.getElementById('level').innerText = this.level;
            // Reset game but keep score
            this.init();
            return;
        }

        // Check collisions with dots
        // Pacman is center-based, Dot is top-left based
        const pBounds = this.pacman.getBounds();

        this.dots = this.dots.filter(dot => {
            if (this.collision(pBounds, dot)) {
                this.score += 10;
                document.getElementById('score').innerText = this.score;
                this.playEatPellet();
                return false;
            }
            return true;
        });

        // Check power pellets
        this.powerPellets = this.powerPellets.filter(p => {
            if (this.collision(pBounds, p)) {
                this.score += 50;
                document.getElementById('score').innerText = this.score;
                this.playEatPowerPellet();
                this.activatePowerMode();
                return false;
            }
            return true;
        });

        // Check ghost collision
        this.ghosts.forEach(ghost => {
            if (this.collision(pBounds, ghost.getBounds())) {
                if (ghost.scared && !ghost.isRespawning) {
                    // Eat ghost
                    this.score += 200;
                    document.getElementById('score').innerText = this.score;
                    this.playEatGhost();
                    ghost.startRespawn();
                } else if (!ghost.isRespawning && !this.isResetting) {
                    this.isResetting = true; // Block further hits
                    this.lives--;
                    document.getElementById('lives').innerText = this.lives;
                    this.playDeath();
                    this.stopWakkaSound();
                    this.stopBackgroundMusic(); // Stop background music on death

                    if (this.lives <= 0) {
                        this.isGameOver = true;
                        document.getElementById('game-overlay').classList.remove('hidden');
                    } else {
                        // Pause game briefly
                        const previousIsGameOver = this.isGameOver;
                        this.isGameOver = true;
                        setTimeout(() => {
                            this.isGameOver = previousIsGameOver;
                            this.resetPositions();
                            this.isResetting = false; // Allow hits again
                            this.startBackgroundMusic(); // Restart background music
                        }, 1000);
                    }
                }
            }
        });
    }

    activatePowerMode() {
        this.ghosts.forEach(g => g.makeScared());
        this.powerTimeRemaining = 10;

        if (this.powerTimer) clearTimeout(this.powerTimer);
        if (this.powerInterval) clearInterval(this.powerInterval);

        this.powerInterval = setInterval(() => {
            this.powerTimeRemaining--;
            if (this.powerTimeRemaining <= 0) {
                clearInterval(this.powerInterval);
            }
        }, 1000);

        this.powerTimer = setTimeout(() => {
            this.ghosts.forEach(g => g.makeNormal());
            this.powerTimeRemaining = 0;
        }, 10000);
    }

    draw() {
        this.walls.forEach(w => w.draw(this.ctx));
        this.dots.forEach(d => d.draw(this.ctx));
        this.powerPellets.forEach(p => p.draw(this.ctx));
        this.ghosts.forEach(g => g.draw(this.ctx));
        if (this.pacman) this.pacman.draw(this.ctx);

        // Draw power timer
        if (this.powerTimeRemaining > 0) {
            this.ctx.fillStyle = '#0ff';
            this.ctx.font = '20px Orbitron, monospace';
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#0ff';
            this.ctx.fillText(`POWER: ${this.powerTimeRemaining}s`, 10, 30);
            this.ctx.shadowBlur = 0;
        }

        // Draw ghost respawn counters
        let respawnY = 60;
        this.ghosts.forEach((ghost, index) => {
            if (ghost.isRespawning && ghost.respawnTimeLeft > 0) {
                this.ctx.fillStyle = ghost.baseColor;
                this.ctx.font = '16px Orbitron, monospace';
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = ghost.baseColor;
                this.ctx.fillText(`Ghost ${index + 1}: ${ghost.respawnTimeLeft}s`, 10, respawnY);
                this.ctx.shadowBlur = 0;
                respawnY += 25;
            }
        });
    }

    collision(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    isWall(col, row) {
        // Allow horizontal wraparound (tunnels) - don't block movement at horizontal edges
        if (col < 0 || col >= this.currentMap[0].length) {
            return false; // Allow movement through horizontal edges (tunnels)
        }
        // Block vertical out of bounds
        if (row < 0 || row >= this.currentMap.length) {
            return true;
        }
        return this.currentMap[row][col] === 1;
    }

    initSounds() {
        // Flag to enable/disable sounds
        this.soundsEnabled = true;
        this.wakkaInterval = null;
    }

    playWakka() {
        if (!this.soundsEnabled) return;
        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = 400;
        gainNode.gain.value = 0.1;

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
    }

    playEatPellet() {
        if (!this.soundsEnabled) return;
        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = 500;
        oscillator.type = 'square';
        gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
    }

    playEatPowerPellet() {
        if (!this.soundsEnabled) return;
        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.setValueAtTime(300, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.2);
        oscillator.type = 'sawtooth';
        gainNode.gain.value = 0.2;

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.2);
    }

    playEatGhost() {
        if (!this.soundsEnabled) return;
        const ctx = this.audioContext;

        for (let i = 0; i < 5; i++) {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.frequency.value = 200 + i * 100;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.1;

            const startTime = ctx.currentTime + i * 0.05;
            oscillator.start(startTime);
            oscillator.stop(startTime + 0.1);
        }
    }

    playDeath() {
        if (!this.soundsEnabled) return;
        const ctx = this.audioContext;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.setValueAtTime(400, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.5);
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.5);
    }

    startWakkaSound() {
        if (this.wakkaInterval || !this.soundsEnabled) return;
        this.wakkaInterval = setInterval(() => {
            this.playWakka();
        }, 300);
    }

    stopWakkaSound() {
        if (this.wakkaInterval) {
            clearInterval(this.wakkaInterval);
            this.wakkaInterval = null;
        }
    }

    playIntroMusic() {
        if (!this.soundsEnabled) return;
        const ctx = this.audioContext;
        const tempo = 120;
        const quarter = 60 / tempo;
        const eighth = quarter / 2;
        const sixteenth = quarter / 4;

        const notes = [
            { f: 493.88, d: eighth }, { f: 987.77, d: eighth }, { f: 739.99, d: eighth }, { f: 622.25, d: eighth },
            { f: 987.77, d: sixteenth }, { f: 739.99, d: eighth }, { f: 622.25, d: quarter },
            { f: 523.25, d: eighth }, { f: 1046.50, d: eighth }, { f: 783.99, d: eighth }, { f: 659.25, d: eighth },
            { f: 1046.50, d: sixteenth }, { f: 783.99, d: eighth }, { f: 659.25, d: quarter },
            { f: 493.88, d: eighth }, { f: 987.77, d: eighth }, { f: 739.99, d: eighth }, { f: 622.25, d: eighth },
            { f: 987.77, d: sixteenth }, { f: 739.99, d: eighth }, { f: 622.25, d: quarter },
            { f: 622.25, d: sixteenth }, { f: 659.25, d: sixteenth }, { f: 698.46, d: sixteenth },
            { f: 698.46, d: sixteenth }, { f: 739.99, d: sixteenth }, { f: 783.99, d: sixteenth },
            { f: 783.99, d: sixteenth }, { f: 830.61, d: sixteenth }, { f: 880.00, d: sixteenth },
            { f: 987.77, d: eighth }
        ];

        let time = ctx.currentTime;
        notes.forEach(note => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine'; // Christmas Bell tone
            osc.frequency.setValueAtTime(note.f * 1.5, time); // Higher pitch for bells
            gain.gain.setValueAtTime(0.1, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + note.d);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(time);
            osc.stop(time + note.d);
            time += note.d;
        });

        // After intro finishes, start background music
        setTimeout(() => {
            if (!this.isGameOver) {
                this.startBackgroundMusic();
            }
        }, notes.reduce((acc, note) => acc + note.d, 0) * 1000);
    }

    startBackgroundMusic() {
        if (!this.soundsEnabled || this.bgMusicInterval) return;

        const ctx = this.audioContext;
        const tempo = 120;
        const beat = 60 / tempo;
        let step = 0;

        // "Last Christmas" Melody sequence (Full Chorus + Start of Verse)
        const melody = [
            // Chorus
            440.00, 440.00, 392.00, 369.99, 329.63, 293.66, 293.66, 246.94, // Last Christmas I gave you my heart
            0, 220, 220, 293.66, 293.66, 293.66, 329.63, 329.63,          // But the very next day
            369.99, 392, 369.99, 329.63, 329.63, 329.63, 329.63, 329.63,    // This year to save me from tears
            392.00, 440.00, 392.00, 369.99, 369.99, 329.63, 293.66, 0,      // I'll give it to someone special

            // Verse 1
            293.66, 293.66, 293.66, 329.63, 369.99, 329.63, 293.66, 0,      // Happy Christmas I wrapped it up...
            369.99, 369.99, 369.99, 369.99, 392, 369.99, 329.63, 0,         // With a note saying I love you...
            329.63, 329.63, 329.63, 349.23, 369.99, 349.23, 329.63, 0,      // Now I know what a fool I've been...
            329.63, 329.63, 329.63, 349.23, 293.66, 293.66, 293.66, 0       // But if you kissed me now...
        ];

        this.bgMusicInterval = setInterval(() => {
            if (this.isGameOver || this.isResetting) return;

            const time = ctx.currentTime;

            // Christmas Synth Bells
            const freq = melody[step % melody.length];
            if (freq > 0) {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine'; // Soft bell sound
                osc.frequency.setValueAtTime(freq, time);
                gain.gain.setValueAtTime(0.05, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(time);
                osc.stop(time + 0.5);
            }

            // Festive rhythmic bass
            if (step % 2 === 0) {
                const bassOsc = ctx.createOscillator();
                const bassGain = ctx.createGain();
                bassOsc.type = 'triangle';
                bassOsc.frequency.setValueAtTime(146.83, time); // D3
                bassGain.gain.setValueAtTime(0.03, time);
                bassGain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
                bassOsc.connect(bassGain);
                bassGain.connect(ctx.destination);
                bassOsc.start(time);
                bassOsc.stop(time + 0.3);
            }

            step++;
        }, beat * 500);
    }

    stopBackgroundMusic() {
        if (this.bgMusicInterval) {
            clearInterval(this.bgMusicInterval);
            this.bgMusicInterval = null;
        }
    }
}

class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = TILE_SIZE;
        this.height = TILE_SIZE;
    }

    getBounds() {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
    }
}

class Wall extends Entity {
    constructor(x, y, game) {
        super(x, y);
        this.game = game;
    }
    draw(ctx) {
        const col = Math.floor(this.x / TILE_SIZE);
        const row = Math.floor(this.y / TILE_SIZE);

        const n = this.game.isWall(col, row - 1);
        const s = this.game.isWall(col, row + 1);
        const w = this.game.isWall(col - 1, row);
        const e = this.game.isWall(col + 1, row);

        ctx.strokeStyle = '#2121de'; // Restore Neon Blue
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 0; i < 2; i++) {
            const offset = i === 0 ? 3 : 6;
            ctx.beginPath();

            // Refined logic for continuous lines
            if (!n) { // Horizontal line at top
                ctx.moveTo(w ? this.x : this.x + offset, this.y + offset);
                ctx.lineTo(e ? this.x + TILE_SIZE : this.x + TILE_SIZE - offset, this.y + offset);
            }
            if (!s) { // Horizontal line at bottom
                ctx.moveTo(w ? this.x : this.x + offset, this.y + TILE_SIZE - offset);
                ctx.lineTo(e ? this.x + TILE_SIZE : this.x + TILE_SIZE - offset, this.y + TILE_SIZE - offset);
            }
            if (!w) { // Vertical line at left
                ctx.moveTo(this.x + offset, n ? this.y : this.y + offset);
                ctx.lineTo(this.x + offset, s ? this.y + TILE_SIZE : this.y + TILE_SIZE - offset);
            }
            if (!e) { // Vertical line at right
                ctx.moveTo(this.x + TILE_SIZE - offset, n ? this.y : this.y + offset);
                ctx.lineTo(this.x + TILE_SIZE - offset, s ? this.y + TILE_SIZE : this.y + TILE_SIZE - offset);
            }

            // Rounded Corners (only if corner is exposed)
            if (!n && !w) {
                ctx.moveTo(this.x + offset, this.y + TILE_SIZE / 2);
                ctx.arcTo(this.x + offset, this.y + offset, this.x + TILE_SIZE / 2, this.y + offset, 5);
            }
            if (!n && !e) {
                ctx.moveTo(this.x + TILE_SIZE / 2, this.y + offset);
                ctx.arcTo(this.x + TILE_SIZE - offset, this.y + offset, this.x + TILE_SIZE - offset, this.y + TILE_SIZE / 2, 5);
            }
            if (!s && !e) {
                ctx.moveTo(this.x + TILE_SIZE - offset, this.y + TILE_SIZE / 2);
                ctx.arcTo(this.x + TILE_SIZE - offset, this.y + TILE_SIZE - offset, this.x + TILE_SIZE / 2, this.y + TILE_SIZE - offset, 5);
            }
            if (!s && !w) {
                ctx.moveTo(this.x + TILE_SIZE / 2, this.y + TILE_SIZE - offset);
                ctx.arcTo(this.x + offset, this.y + TILE_SIZE - offset, this.x + offset, this.y + TILE_SIZE / 2, 5);
            }

            if (i === 0) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00f';
            } else {
                ctx.shadowBlur = 0;
            }
            ctx.stroke();
        }
    }
}

class Dot extends Entity {
    constructor(x, y) {
        super(x, y);
        this.x += TILE_SIZE / 2 - 2;
        this.y += TILE_SIZE / 2 - 2;
        this.width = 4;
        this.height = 4;
    }
    draw(ctx) {
        // Hamburger Dot
        const cx = this.x + 2;
        const cy = this.y + 2;

        ctx.shadowBlur = 0;

        // Top Bun
        ctx.fillStyle = '#D2691E';
        ctx.beginPath();
        ctx.arc(cx, cy - 1, 3, Math.PI, 0);
        ctx.fill();

        // Meat
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(cx - 3, cy, 6, 1.5);

        // Bottom Bun
        ctx.fillStyle = '#D2691E';
        ctx.fillRect(cx - 3, cy + 1.5, 6, 1.5);
    }
}

class PowerPellet extends Entity {
    constructor(x, y) {
        super(x, y);
        this.x += TILE_SIZE / 2 - 6;
        this.y += TILE_SIZE / 2 - 6;
        this.width = 12;
        this.height = 12;
    }
    draw(ctx) {
        // Pizza PowerPellet
        const cx = this.x + 6;
        const cy = this.y + 6;

        // Pulse effect
        const scale = 1 + Math.sin(Date.now() / 200) * 0.2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);

        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff0';

        // Pizza Crust
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(0, 6);
        ctx.lineTo(-6, -6);
        ctx.lineTo(6, -6);
        ctx.closePath();
        ctx.fill();

        // Pizza Toppings (Pepperoni)
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(-2, -2, 1.5, 0, Math.PI * 2);
        ctx.arc(2, -2, 1.5, 0, Math.PI * 2);
        ctx.arc(0, 2, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        ctx.shadowBlur = 0;
    }
}

class Ghost extends Entity {
    constructor(x, y, game, index) {
        super(x, y);
        this.game = game;
        this.baseColor = ['#ff0000', '#ffb8ff', '#00ffff', '#ffb852'][index % 4];
        this.scaredColor = '#0000ff';
        this.scared = false;
        this.isRespawning = false;

        // Respawn / Home coordinates
        this.startX = x + TILE_SIZE / 2;
        this.startY = y + TILE_SIZE / 2;

        this.respawn();
    }

    respawn() {
        this.x = this.startX;
        this.y = this.startY;
        this.dir = { x: 0, y: 0 };
        // Base speed 2.5, increase by 0.25 per level (was 1.5)
        this.speed = 2.5 + (this.game.level - 1) * 0.25;
        this.scared = false;
        this.isRespawning = false;
        this.changeDirection();
    }

    startRespawn() {
        this.isRespawning = true;
        // Base 3 seconds, +1 second per level
        const respawnTime = 3 + (this.game.level - 1);
        this.respawnTimeLeft = respawnTime;
        this.x = -100; // Move off screen
        this.y = -100;

        // Countdown interval
        if (this.respawnInterval) clearInterval(this.respawnInterval);
        this.respawnInterval = setInterval(() => {
            this.respawnTimeLeft--;
            if (this.respawnTimeLeft <= 0) {
                clearInterval(this.respawnInterval);
            }
        }, 1000);

        setTimeout(() => {
            this.respawn();
        }, respawnTime * 1000);
    }

    makeScared() {
        if (!this.isRespawning) {
            this.scared = true;
        }
    }

    makeNormal() {
        this.scared = false;
    }

    getBounds() {
        return { x: this.x - TILE_SIZE / 2, y: this.y - TILE_SIZE / 2, width: this.width, height: this.height };
    }

    update() {
        let currentSpeed = this.scared ? 1 : this.speed;

        const centerX = (this.x - TILE_SIZE / 2);
        const centerY = (this.y - TILE_SIZE / 2);
        const col = Math.round(centerX / TILE_SIZE);
        const row = Math.round(centerY / TILE_SIZE);

        const alignedX = Math.abs(centerX - col * TILE_SIZE) < currentSpeed;
        const alignedY = Math.abs(centerY - row * TILE_SIZE) < currentSpeed;

        if (alignedX && alignedY) {
            // Check if current match is clear, if not or randomly, change direction
            if (this.game.isWall(col + this.dir.x, row + this.dir.y) || Math.random() < 0.05) {
                this.x = col * TILE_SIZE + TILE_SIZE / 2;
                this.y = row * TILE_SIZE + TILE_SIZE / 2;
                this.changeDirection(col, row);
            }
        }

        this.x += this.dir.x * currentSpeed;
        this.y += this.dir.y * currentSpeed;

        // Tunnel wraparound (horizontal)
        const mapWidth = this.game.currentMap[0].length * TILE_SIZE;
        if (this.x < 0) {
            this.x = mapWidth;
        } else if (this.x > mapWidth) {
            this.x = 0;
        }
    }

    changeDirection(col, row) {
        const dirs = [
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 }
        ];
        // Filter out blocked directions
        const validDirs = dirs.filter(d => !this.game.isWall((col || Math.floor(this.x / TILE_SIZE)) + d.x, (row || Math.floor(this.y / TILE_SIZE)) + d.y));

        if (validDirs.length > 0) {
            this.dir = validDirs[Math.floor(Math.random() * validDirs.length)];
        } else {
            // Dead end (shouldn't happen in standard map but just in case)
            this.dir = { x: -this.dir.x, y: -this.dir.y };
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.scared ? this.scaredColor : this.baseColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = ctx.fillStyle;

        // Classic Ghost Shape (Dome + Feet)
        ctx.beginPath();
        ctx.arc(this.x, this.y - 2, 10, Math.PI, 0); // Dome
        ctx.lineTo(this.x + 10, this.y + 10);

        // 3 Wavy feet
        for (let i = 0; i < 3; i++) {
            const fx = this.x + 10 - (i * 6.66);
            ctx.lineTo(fx - 3.33, this.y + 7);
            ctx.lineTo(fx - 6.66, this.y + 10);
        }

        ctx.lineTo(this.x - 10, this.y + 10);
        ctx.closePath();
        ctx.fill();

        // Glasses (Sunglasses) - Using rect for maximum compatibility
        ctx.fillStyle = '#000';
        ctx.beginPath();
        // Left lens
        ctx.fillRect(this.x - 7, this.y - 6, 6, 4);
        // Right lens
        ctx.fillRect(this.x + 1, this.y - 6, 6, 4);
        ctx.fill();
        ctx.fillRect(this.x - 1, this.y - 5, 2, 1);

        if (this.scared) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(this.x - 5, this.y - 4, 2, 1);
            ctx.fillRect(this.x + 3, this.y - 4, 2, 1);
        } else {
            ctx.fillStyle = '#fff';
            ctx.fillRect(this.x - 5, this.y - 5, 1, 1);
            ctx.fillRect(this.x + 3, this.y - 5, 1, 1);
        }
    }
}

class Pacman extends Entity {
    constructor(x, y, game) {
        super(x, y);
        this.game = game;
        // Base speed 3, increase by 0.3 per level (was 2)
        this.speed = 3 + (this.game.level - 1) * 0.3;
        this.dir = { x: 0, y: 0 };
        this.nextDir = { x: 0, y: 0 };
        this.radius = 12;
        this.mouthOpen = 0.2;
        this.mouthSpeed = 0.1;
        this.angle = 0;
        // Snap to center
        this.x += TILE_SIZE / 2;
        this.y += TILE_SIZE / 2;
    }

    getBounds() {
        return { x: this.x - this.radius, y: this.y - this.radius, width: this.radius * 2, height: this.radius * 2 };
    }

    handleKey(e) {
        switch (e.key) {
            case 'ArrowUp': this.nextDir = { x: 0, y: -1 }; break;
            case 'ArrowDown': this.nextDir = { x: 0, y: 1 }; break;
            case 'ArrowLeft': this.nextDir = { x: -1, y: 0 }; break;
            case 'ArrowRight': this.nextDir = { x: 1, y: 0 }; break;
        }
    }

    update() {
        // Animation
        this.mouthOpen += this.mouthSpeed;
        if (this.mouthOpen > 0.2 || this.mouthOpen < 0) this.mouthSpeed = -this.mouthSpeed;

        // Movement Logic (Grid based)
        // Only turn if perfectly aligned with grid center
        const centerX = (this.x - TILE_SIZE / 2);
        const centerY = (this.y - TILE_SIZE / 2);

        // Simple approximate grid alignment check
        const col = Math.round(centerX / TILE_SIZE);
        const row = Math.round(centerY / TILE_SIZE);

        const alignedX = Math.abs(centerX - col * TILE_SIZE) < this.speed;
        const alignedY = Math.abs(centerY - row * TILE_SIZE) < this.speed;

        if (alignedX && alignedY) {
            // Try to change direction
            if (this.nextDir.x !== 0 || this.nextDir.y !== 0) {
                if (!this.game.isWall(col + this.nextDir.x, row + this.nextDir.y)) {
                    this.dir = { ...this.nextDir };
                    this.nextDir = { x: 0, y: 0 };
                    // Snap to grid exact center to prevent drift
                    this.x = col * TILE_SIZE + TILE_SIZE / 2;
                    this.y = row * TILE_SIZE + TILE_SIZE / 2;
                }
            }

            // Check if current direction is blocked
            if (this.game.isWall(col + this.dir.x, row + this.dir.y)) {
                this.dir = { x: 0, y: 0 };
            }
        }

        this.x += this.dir.x * this.speed;
        this.y += this.dir.y * this.speed;

        // Wakka sound when moving
        if (this.dir.x !== 0 || this.dir.y !== 0) {
            this.game.startWakkaSound();
        } else {
            this.game.stopWakkaSound();
        }

        // Tunnel wraparound (horizontal)
        const mapWidth = this.game.currentMap[0].length * TILE_SIZE;
        if (this.x < 0) {
            this.x = mapWidth;
        } else if (this.x > mapWidth) {
            this.x = 0;
        }

        // Rotation
        if (this.dir.x === 1) this.angle = 0;
        if (this.dir.x === -1) this.angle = Math.PI;
        if (this.dir.y === 1) this.angle = Math.PI / 2;
        if (this.dir.y === -1) this.angle = -Math.PI / 2;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ffd700';
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, this.mouthOpen, Math.PI * 2 - this.mouthOpen);
        ctx.lineTo(0, 0);
        ctx.fill();

        ctx.restore();
    }
}

new Game();
