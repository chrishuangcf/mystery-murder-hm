# 🎮 Mystery Murder Game Engine

An **interactive mystery game engine** where you solve murders by investigating crime scenes, interviewing suspects, and gathering evidence. Create complete game scenarios in Markdown format and import them into the engine!

## 🎯 What is Mystery Murder?

Mystery Murder is a **dynamic, AI-powered detective game engine**:
- **Portable Mysteries** - Define complete game scenarios in Markdown files and import them
- **Dynamic NPCs** - Characters with schedules, secrets, and relationships
- **Evidence-Based Gameplay** - Collect clues to solve the mystery
- **Time Progression** - Game world evolves as time advances
- **Customizable** - Admin panel to create and manage game content

## 💡 Our Vision

When I look at the AI revolution, I see more than just fast math and smart predictions—I see a once‑in‑a‑lifetime chance to build something *incredible* together. Prompt engineers are already using personas to give AI a kind of "soul" tailored to different professions… so why not turn that power into a living, breathing game world?

I'm building a **free, easy-to-use game system** where *anyone* can jump in: developers, storytellers, and players alike. Imagine a community-driven platform where:

* **AI designs the game system**
* **AI plots intricate mystery murder stories**
* **AI solves the cases and explains how**
* **AI generates step-by-step walkthroughs**
* **AI can even turn your adventure into a full novel**

All of this, powered (mostly) by AI.

Now, I know one important truth: **AI tokens aren't free.** They cost real money and real compute. That's exactly why I'm committed to keeping this game system **free of charge** for the community—and why I'm inviting others to help it grow.

If you join us, my only ask is this:
Help improve the system, share your stories and designs, and **respect the spirit of the project**. Please don't take the idea or the game engine, rebrand it, and sell it as your own product.

This is meant to be a **shared playground**, not a marketplace—a place where AI and human creativity build something amazing *together*.

## ⚡ Quick Start

### Prerequisites
- Docker and Docker Compose installed
- 4GB+ RAM for Docker
- Ports 80, 8000, 5432, 11434 available
- Modern web browser

### Start the Game (3 steps)

```bash
# 1. Clone and navigate
cd mystery_murder

# 2. Build and start services
docker compose up -d --build

# 3. Wait 2-3 minutes for startup
docker compose ps

# Check if ready
curl http://localhost:8000/health
```

### Access the Game

- **Game**: http://localhost
- **Admin Panel**: http://localhost/admin  
- **API Docs**: http://localhost:8000/docs

**That's it!** The game loads with "Mystery at Blackwood Manor" ready to play.

## 📖 Documentation Guide

**New to the project?** Start with [**DOCUMENTATION_INDEX.md**](./DOCUMENTATION_INDEX.md) for a complete guide to all documentation.

**Quick links:**
- 👤 **Using the game?** → [Player Quick Start](./documents/player/QUICK_START.md)
- 👨‍💻 **Setting up development?** → [Docker & Development Setup](./documents/developer/DOCKER_AND_DEVELOPMENT.md)
- ⚡ **Need quick commands?** → [Quick Reference](./QUICK_REFERENCE.md)
- 🎯 **Want to switch characters?** → [Character Selection Guide](./documents/developer/CHARACTER_SELECTION_GUIDE.md)
- 📚 **See all docs?** → [Documentation Index](./DOCUMENTATION_INDEX.md)

## 🤖 Choosing Your LLM (AI Provider)

The game uses AI to generate NPC responses. You can choose between multiple providers:

| Provider | Cost | Speed | Setup |
|----------|------|-------|-------|
| **Ollama** (default) | Free | Slow | ✅ Ready now |
| **OpenAI** | $1-5/mo | Fast | Need API key |
| **Anthropic Claude** | $5-25/mo | Medium | Need API key |
| **Azure OpenAI** | Enterprise | Fast | Azure setup |

**Currently using:** Ollama (local, free, no setup required)

**Want to switch?** See [LLM_COMPLETE_GUIDE.md](./docs/LLM_COMPLETE_GUIDE.md) for complete setup and troubleshooting guide.

## 📚 Documentation

**👉 Start Here:**
- [**Quick Start Guide**](documents/player/QUICK_START.md) - Complete guide to playing and creating mysteries

**Player Guides:**
- [Troubleshooting](documents/player/TROUBLESHOOTING.md) - Solutions to common issues
- [Sample Mystery](documents/player/manuscripts/SAMPLE.md) - Full example mystery
- [Sample Walkthrough](documents/player/manuscripts/walkthroughs/SAMPLE_WALKTHROUGH.md) - How to solve included mystery

**For Developers:**
- [Docker & Development Setup](documents/developer/DOCKER_AND_DEVELOPMENT.md) - **Start here for development**
- [Character Selection Guide](documents/developer/CHARACTER_SELECTION_GUIDE.md) - NPC roleplay system
- [Technical Documentation](documents/developer/TECHNICAL_DOCUMENTATION.md) - System architecture & API reference
- [Frontend Development Guide](documents/developer/FRONTEND_DEV_GUIDE.md) - UI architecture
- [Manuscript Format](documents/developer/MANUSCRIPT_FORMAT.md) - Technical specification

## 🎮 Game Features

### Core Game Systems

| Feature | Description |
|---------|-------------|
| **Time System** | Game time progresses automatically; NPCs follow schedules |
| **NPC System** | Characters with personalities, secrets, moods, and relationships |
| **Evidence System** | Physical, documentary, and testimonial clues to collect |
| **Location System** | Connected rooms to explore and search |
| **Chapter System** | Progressive story that unlocks as you discover evidence |
| **Manuscript System** | Define complete games in Markdown and import them |

### Create Your Own Mysteries

```
Write Markdown file → Validate → Import → Play
   (NPCs, locations,    Check      Load     Test &
    evidence, plot)   for errors   into     solve
                                   engine
```

**You can use AI (ChatGPT) to generate complete mysteries!**
See [QUICK_START.md](documents/player/QUICK_START.md#-ai-assisted-manuscript-creation) for how.

### Included Mystery

**Mystery at Blackwood Manor** - A Victorian murder mystery:
- 5 suspects with secrets and motives
- 6 locations to explore
- 10 pieces of evidence
- Solvable in 2-3 hours
- Full example of game format

## 🎯 How to Play

1. **Explore locations** - Visit crime scene and surrounding areas
2. **Interview NPCs** - Talk to suspects and witnesses
3. **Gather evidence** - Find clues throughout the game world
4. **Analyze findings** - Review evidence and build timeline
5. **Solve mystery** - Identify the culprit and present your evidence

See [QUICK_START.md](documents/player/QUICK_START.md#-how-to-play) for detailed gameplay instructions.

## ✍️ Create Your Own Mysteries

### Three Ways to Create

**1. Use ChatGPT (Easiest)**
- Provide story concept to ChatGPT
- Get complete Markdown manuscript
- Import and play
- [See instructions](documents/player/QUICK_START.md#-ai-assisted-manuscript-creation)

**2. Modify the Sample**
- Copy [SAMPLE.md](documents/player/manuscripts/SAMPLE.md)
- Change NPCs, locations, evidence
- Keep the structure and format
- Import your version

**3. Write from Scratch**
- Use [MANUSCRIPT_WRITING_GUIDE.md](documents/player/MANUSCRIPT_WRITING_GUIDE.md)
- Follow the Markdown format
- Define NPCs, locations, evidence, and solution
- Test and refine

### Quick Example

Here's a minimal mystery structure:

```markdown
# Your Mystery Title

## NPCs
### Suspect Name
- Age, gender, job, role
- Personality and secrets
- Schedule (where at each hour)
- Relationships with other NPCs

## Locations
### Room Name
- Description
- Connected rooms
- Objects to search
- Evidence present

## Evidence
### Clue Name
- Type (physical/documentary/testimonial)
- Description
- Where found
- Who knows about it

## Solution
### Culprit
- Who did it
- Why (motive)
- How (method)  
- Proof (evidence chain)
```

### Share Your Mysteries

1. Export your game: Admin Panel → Manuscript Tab → Export
2. Share the `.md` file with others
3. They can import it into their own game engine!

---

## 🏗️ Architecture

### Technology Stack
- **Frontend**: Angular 19 + Angular Material
- **Backend**: Python FastAPI with async SQLAlchemy
- **Database**: PostgreSQL 15
- **LLM**: Ollama (local AI service for NPC dialogue)
- **Container**: Docker Compose

### Services
```
docker compose up -d
├── database (PostgreSQL on port 5432)
├── backend (FastAPI on port 8000)
├── frontend (Nginx on port 80)
└── llm (Ollama on port 11434, optional)
```

---

## 📖 Full Documentation

### Player Guides
- [QUICK_START.md](documents/player/QUICK_START.md) - **Start here!**
- [TROUBLESHOOTING.md](documents/player/TROUBLESHOOTING.md) - Common issues

### Mystery Examples
- [SAMPLE.md](documents/player/manuscripts/SAMPLE.md) - Full example mystery
- [SAMPLE_WALKTHROUGH.md](documents/player/manuscripts/walkthroughs/SAMPLE_WALKTHROUGH.md) - How to solve it

### Creation Guides
- [MANUSCRIPT_WRITING_GUIDE.md](documents/player/MANUSCRIPT_WRITING_GUIDE.md) - Detailed writing guide
- [MANUSCRIPT_FORMAT.md](documents/developer/MANUSCRIPT_FORMAT.md) - Technical format reference

### Developer Documentation  
- [TECHNICAL_DOCUMENTATION.md](documents/developer/TECHNICAL_DOCUMENTATION.md) - Architecture, APIs, database schema
- [ORIGINAL_SPECIFICATIONS.md](documents/developer/ORIGINAL_SPECIFICATIONS.md) - Design requirements
- [IMPLEMENTATION_PLAN.md](documents/developer/IMPLEMENTATION_PLAN.md) - Development roadmap

---

## 🛠️ Common Tasks

### View Logs
```bash
# Backend logs
docker compose logs -f backend

# Frontend logs
docker compose logs -f frontend

# All logs
docker compose logs -f
```

### Access Database
```bash
# Connect to PostgreSQL
docker compose exec database psql -U gamemaster -d mystery_game

# View NPCs
SELECT name, job_title FROM npcs;

# View locations
SELECT name, description FROM locations;
```

### Rebuild Services
```bash
# Rebuild frontend
docker compose build --no-cache frontend
docker compose up -d frontend

# Rebuild backend
docker compose build --no-cache backend
docker compose up -d backend

# Rebuild everything
docker compose build --no-cache
docker compose up -d
```

### Export/Import Manuscripts
```bash
# Export current game
curl http://localhost:8000/api/manuscript/export -o my_mystery.md

# Import a manuscript
curl -X POST http://localhost:8000/api/manuscript/import \
  -F "file=@my_mystery.md" \
  -F "clear_existing=true"

# Validate before importing
curl -X POST http://localhost:8000/api/manuscript/validate \
  -F "file=@my_mystery.md"
```

---

## 🆘 Troubleshooting

### Services won't start
```bash
# Check Docker is running
docker version

# Check ports are available
lsof -i :80 :8000 :5432 :11434

# Full restart
docker compose down
docker compose up -d --build
```

### Game loads but can't play
- Wait another minute for services to fully initialize
- Check http://localhost:8000/health
- Refresh browser (Cmd+Shift+R on Mac, Ctrl+F5 on Windows)
- Check docker compose logs for errors

### Import fails
- Validate manuscript first: click "Validate" button
- Check file is `.md` format (not `.txt`, `.doc`, etc.)
- Review error messages in validation output
- See [TROUBLESHOOTING.md](documents/player/TROUBLESHOOTING.md)

For more help, see [TROUBLESHOOTING.md](documents/player/TROUBLESHOOTING.md)

**Narrative System** (`/api/narrative/`)
- Story chapters
- Location narratives
- Event timeline

**Admin** (`/api/admin/`)
- Manage NPCs, evidence, interactions
- Full CRUD operations

**WebSocket** (`/ws`)
- Real-time game events
- NPC movements
- Evidence discoveries

See [Technical Documentation](documents/developer/TECHNICAL_DOCUMENTATION.md) for complete API reference.

## Testing the Manuscript System

### Import the Test Manuscript

```bash
# From project root
curl -X POST http://localhost:8000/api/manuscript/import \
  -F "file=@test_manuscript.md" \
  -F "clear_existing=true"
```

### Validate a Manuscript

```bash
curl -X POST http://localhost:8000/api/manuscript/validate \
  -F "file=@test_manuscript.md"
```

### Export Current Game

```bash
curl -X GET http://localhost:8000/api/manuscript/export \
  -o exported_game.md
```

See [Manuscript Writing Guide](documents/player/MANUSCRIPT_WRITING_GUIDE.md) to create your own mysteries!

## Game Data

The included "Mystery at Blackwood Manor" scenario features:

**NPCs:**
- Lady Victoria Blackwood (victim)
- James Blackwood (nephew, suspect)
- Margaret Sinclair (housekeeper, witness)
- Dr. Edmund Price (physician, suspect)
- Isabella Blackwood (daughter, suspect)

**Locations:**
- 6 locations across Blackwood Manor
- Library (crime scene)
- Study with secret passage
- Kitchen, Parlor, Main Hall, Conservatory

**Evidence:**
- 10 pieces of evidence to discover
- Physical evidence, documents, testimonials
- Importance levels guiding investigation

**The Mystery:**
Solve the murder of Lady Victoria Blackwood by interrogating suspects, collecting evidence, and uncovering secrets.

Complete walkthrough: [Test Manuscript Walkthrough](documents/player/TEST_MANUSCRIPT_WALKTHROUGH.md)

## Troubleshooting

For detailed troubleshooting, see [Troubleshooting Guide](documents/player/TROUBLESHOOTING.md).

**Quick Fixes:**

```bash
# Restart all services
docker compose restart

# Rebuild specific service
docker compose build frontend --no-cache
docker compose up -d frontend

# View logs
docker compose logs -f backend

# Reset database
docker compose down -v
docker compose up -d
```

## Next Steps

See `Implementation.md` for the complete development roadmap including:

- Phase 3: Advanced frontend components (game world, conversation UI, map view)
- Phase 4: Integration & testing (E2E tests, LLM optimization)
- Phase 5: Deployment & optimization (production setup, monitoring)

## Project Structure

```
mystery_murder/
├── backend/               # FastAPI backend
│   ├── app/
│   │   ├── models/       # SQLAlchemy models
│   │   ├── routes/       # API endpoints
│   │   ├── services/     # Business logic (LLM, cache)
│   │   ├── simulation/   # World clock, scheduler
│   │   └── utils/        # Helper functions
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/             # Angular frontend
│   ├── src/
│   │   └── app/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── database/             # Database initialization
│   ├── init.sql          # Schema
│   └── seed_data.sql     # Sample data
├── certs/                # SSL certificates (optional)
├── docker-compose.yml    # Container orchestration
└── .env                  # Environment variables
```

## Contributing

For development:

1. Make changes to backend or frontend code
2. Rebuild the specific service: `docker-compose build backend`
3. Restart: `docker-compose up -d backend`
4. Test using the API endpoints or frontend

## License

MIT License

## Support

For issues and questions, please refer to:
- `Implementation.md` - Complete implementation guide
- `Mystery Murder.md` - Game design document
- Docker logs: `docker-compose logs [service_name]`

---

Built with ❤️ using Angular, FastAPI, and Ollama
