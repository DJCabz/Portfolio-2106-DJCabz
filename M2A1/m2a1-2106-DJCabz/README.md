# Module 2 – Activity 1 – Your Portfolio: Skeleton + Flexbox Layout

You've practiced semantic HTML on Curbside Thai. Now build **your own**
single-page portfolio - the one you **wireframed in Week 1**. Keep your
wireframe open beside you; it is your blueprint.

This week is **layout only** - no colours or fonts yet. New concepts: linking a
stylesheet, the box model, and **Flexbox** for one-dimensional rows.

> **No wireframe ready yet?** You may fall back to the Curbside Thai content for
> this activity - same concepts.

## What to do

### 1. Fill in your details

Open `student.json` and fill in every field (use the **class code** your
instructor gave you):

```json
{
  "classCode": "1234",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

> **Keep `student.json` identical across all your activities.** The autograder
> cross-checks these fields between your repos, and a mismatch is flagged. The
> `classCode` must also match the one in your repo name.

### 2. Build the page

> **Work in the [`src/`](src/) folder.** That is the only folder you edit.
> Everything else (`test/`, `package.json`, `.github/`) is course plumbing -
> leave it alone.

Open [`src/index.html`](src/index.html). It contains only a comment describing
what to build. Replace it with a portfolio that has:

1. A valid **HTML5 skeleton** (doctype, `<html lang>`, head with **title** and
   **UTF-8** charset) plus an HTML comment describing the page.
2. A separate **`styles.css`** file, **linked** from the head. From now on, all
   styling lives there - **never** a `style=""` attribute.
3. Semantic sections from your wireframe: a **header** (site name + nav), a
   **hero**, an **about** section, a **projects** section, a **contact** area,
   and a **footer** (`header`, `nav`, `main`, `section`, `footer`).
4. In the nav, an **unordered list of links** (in-page links like
   `href="#projects"` are fine).
5. **Flexbox** layout: a horizontal nav list with the bullets removed and a
   `gap`; a header laid out as a row with the site name and nav at opposite
   ends, centred vertically; a hero laid out as a row.
6. A **max-width** on the page, **centred** with auto margins, plus padding so
   content never touches the screen edges.

The comment in `src/index.html` names every concept to research. Look the
properties up and write the CSS yourself - that is the point.

### 3. View it in a browser

Double-click `src/index.html` (or right-click → *Open with* your browser) and
resize the window to see your Flexbox rows respond.

## Set up your repo

1. **Create from the template** - *Use this template → Create a new repository*.
2. **Owner = the `HAU-6INTROWEB` course org**, not your personal account.
3. **Name it** `m2a1-<classcode>-yourname` (e.g. `m2a1-1234-juandelacruz`). The
   `<classcode>` must match `student.json`.
4. **Make it Private.**

```bash
git clone https://github.com/HAU-6INTROWEB/m2a1-<classcode>-yourname.git
cd m2a1-<classcode>-yourname
```

## Running the tests

```bash
npm install
npm test
```

This activity is graded by **9 tests** (1 point each). They check:

- ✅ valid HTML5 skeleton (doctype, `lang`, `<title>`, `<meta charset>`)
- ✅ an external `styles.css` is linked and has CSS in it
- ✅ no inline `style=""` attributes
- ✅ semantic sections: `header`, `nav`, `main`, `footer`, and `section` blocks
- ✅ the nav has an unordered list of at least three links
- ✅ Flexbox is used (`display: flex`)
- ✅ flex items are aligned (`justify-content`/`align-items`) and spaced (`gap`)
- ✅ the page is centred (`max-width` + auto margins)
- ✅ `student.json` is completely filled in

Each part is graded independently, so you earn partial credit.

## Confirm your submission

Your repo **is** your submission. When your tests pass locally, **commit and
push**:

```bash
git add -A
git commit -m "Activity 1 complete"
git push
```

Pushing triggers the **Autograde** workflow. Open the **Actions** tab, then the
latest **Autograde** run, and confirm the green ✅ check, the "9 / 9 tests
passed" summary, and the 📸 page-preview link.

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.
