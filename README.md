# BIOL 8420 — Exam 3 Practice Lab (Unit 3: Modules 5 & 6)

A self-contained practice app for the Unit 3 exam. No build step, no dependencies,
no network calls. Open `index.html` locally, or push the folder to GitHub Pages.

Companion to the [Exam 1](https://madisonwebb01.github.io/exam1practice/) and Unit 2 labs.

## What's in it

**81 questions, verbatim from the class quiz banks**, with the instructor-highlighted
answer as the key:

| File | Module | Questions |
|---|---|---|
| `bank1.js` | Module 5 — Cell Signaling | 39 |
| `bank2.js` | Module 6 — The Cell Cycle | 42 |

Every option — right and wrong — carries its own explanation. The reasoning is
generated from the same source as the Module 5 and Module 6 study guides, so the
app and the documents cannot drift apart.

**Three tabs:**

- **Practice Test** — one question at a time, Canvas-styled. Filter by module, mixed,
  missed-only or flagged. Shuffle questions and/or answers. Explanations stay hidden
  until you submit, with a "show the reasoning anyway" button when you get it right.
- **Additional Practice Tools** — five drill decks (counts below).
- **My Review** — everything you have answered, missed or flagged, with full reasoning
  and a jump back into the test.

**Drill decks in `drills.js`:**

| Deck | What it does | Cards |
|---|---|---|
| Distractor Autopsy | One wrong answer at a time from every question; say why it fails | 251 (generated) |
| Variable Twists | The same scenarios with one variable changed | 14 |
| Fix the False | Every credited-false statement, repaired | 37 |
| Reverse ID | Given the mechanism, name the molecule or technique | 39 |
| Rapid Traps | The instructor's own warnings, as fast true/false | 35 |

## Hosting on GitHub Pages

The folder is flat and ready to push as-is:

1. Create a repo and push these six files to the root of `main`.
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
3. The site is live at `https://<user>.github.io/<repo>/` in a minute or two.

## Notes on the source material

- **Answer keys were extracted twice**, with two independent PDF libraries, and the
  two passes agreed on all 81 keys.
- **Module 6 Q11** has no highlight in the shared class document — nobody filled it in.
  The answer given (G1) is derived from the lecture and the question carries a note
  saying so.
- **Module 6 Q24** is flagged: the bank credits (c), but option (b) is also false by the
  course's own potency definitions. Answer (c) to match the bank.
- **Module 5 Q6 and Q38** are the same fact in different wording. Both are kept.
- **Module 5 Q2** option (a), "Group of answer choices", is a Canvas copy-paste artifact
  rather than a real choice.
- **Module 6 Q25** — ATP is genuinely required, but the bank wants the mechanistic answer
  (kinetochore motor proteins). Noted in the app.

Two questions ship with the figure they depend on: the G-protein FRET traces
(`fret-gs.png`, Module 5 Q1 and Q3) and the ECT gene-expression chart
(`ect-genes.png`, Module 6 Q38).

## Storage

Progress is kept in `localStorage` under `biol8420-unit3-lab-v1`. It is per-browser and
does **not** sync across devices. "Reset progress" in the top right clears it, and asks
twice.

Styled per the `madison-grad-school-style` skill — Lato, Canvas blue, white cards.
