Timeline App – Accessibility Notes

This file explains the accessibility improvements made in the Timeline App to make sure it works well for everyone, including people with disabilities.

1. ARIA Roles and Labels

Header:

role="banner" added.

Dark mode toggle uses role="switch" with aria-checked and an aria-label indicating its state.

Event Modal:

Modal has aria-labelledby for the title and aria-describedby for the content.

Close button has a clear aria-label.

Timeline / Navigation:

Wrapped in <nav> with aria-label="Historical timeline".

Active timeline button uses aria-current="step".

Buttons include labels with the year and event title.

TimelineNav uses a list structure (<ul><li>) for better screen reader support.

2. Focus Management

Focus stays inside the modal while open and returns to the timeline button when closed.

All buttons and interactive elements are keyboard-focusable.

3. Keyboard Navigation

Navigate timeline years using Tab.

Press Enter or Space to open a modal.

Close button and “Learn More” buttons are keyboard-accessible.

4. Color Contrast

Using Bootstrap’s default colors, which meet WCAG AA:

Blue buttons with white text 

Black text on white background 

Focus outlines are black for high visibility.

5. Other Improvements

Headings are semantic (h1 for main header, h2 for modal titles).

Focus outlines added for timeline buttons, “Learn More”, and Close buttons.