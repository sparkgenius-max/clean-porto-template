# Nova Portfolio Template

A modern, minimalist portfolio template built with React and Tailwind CSS. Designed for designers, developers, and creatives to showcase their work in a clean and professional way.

## Features

-   **Modern & Minimalist Design:** Clean aesthetics with a focus on typography and whitespace.
-   **Responsive Layout:** Fully responsive design that looks great on all devices.
-   **Project Showcase:** Detailed project pages with image galleries and case study sections.
-   **Services Section:** Highlight your services and expertise.
-   **Testimonials:** Display client reviews to build trust.
-   **Animations:** Smooth page transitions and micro-interactions.
-   **SEO Friendly:** Basic SEO structure implemented.

## Tech Stack

-   **React:** UI Library
-   **TypeScript:** Type safety
-   **Tailwind CSS:** Styling
-   **Vite:** Build tool
-   **React Router:** Navigation

## Installation

1.  **Clone or Download:**
    Download the project files to your local machine.

2.  **Install Dependencies:**
    Open your terminal in the project directory and run:
    ```bash
    npm install
    ```

3.  **Run Locally:**
    Start the development server:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000` (or another port if 3000 is busy).

4.  **Build for Production:**
    To create a production build:
    ```bash
    npm run build
    ```
    The built files will be in the `dist` directory.

## Customization

All content is managed in the `constants.ts` file for easy updates.

### Updating Content
Open `constants.ts` to modify:
-   **Projects:** Add or edit your portfolio projects.
-   **Services:** Update your service offerings.
-   **Experiences:** Update your work history.
-   **Testimonials:** Add client reviews.
-   **Nav Links:** Modify navigation menu items.

### Updating Branding
-   **Logo/Name:** Update the text in `components/Header.tsx` and `components/Footer.tsx`.
-   **Colors/Fonts:** Customize `tailwind.config.js` (defined in `index.html` script) or `index.css`.

## License

This project is licensed under the MIT License.
