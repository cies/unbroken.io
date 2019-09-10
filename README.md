# unbroken.io — website code

This is a [Gatsby](https://www.gatsbyjs.org) (static site with React) project, based off of [gatsby-starter-default-i18n](https://github.com/angeloocana/gatsby-plugin-i18n/tree/master/packages/gatsby-starter-default-i18n). [Bulma](https://bulma.io) is the flexbox-based CSS framework used.


### Get going

`yarn` — Fetch dependencies.

`yarn decrypt-fonts` — Decrypt the fonts (required a password), after this **you need** to manually `unzip` them.

`yarn start` — Start development server (with hot-reloading, by default at [localhost:8000](http://localhost:8000)).

`yarn build` — Static build optimized for production (static HTML and per-route JavaScript code bundles).

`yarn serve-build` — Serves the build locally.

`yarn format` — Clean up (prettify) the code.


## Troubleshooting

* When `yarn start` errors out with `This dependency was not found`, you should probably sync dependencies by simply running `yarn`.


### TODOs

* Add the "Sign in" page (as shown in the Indesign as the first page of `02 - Applicatie`). This is a page with a form.

  * Please also create a version of this page with the message "Unknown combination of email address and password. Please try again."

* Allow for rich text (bold, italic, underline, links) in all text blocks, possibly by allowing HTML or by processing with something like markdown.

* Produce a styled 404 page. For styling it, please be creative (may use one of the illustration images, or whatever).

* On buttons only the link text is a clickable link (the rest shows the hand-with-finger mouse pointer, but you cannot clink the link from there): the whole button needs to be clickable as a link.

* Logo in the footer of the page is blurry. An SVG logo is provided in the designs (`00 - Style/Logo's/00.1-Logo-Diap.svg`).

* Hover/active state incorrect on main buttons (off from `00 - Style/00-StyleGuide.jpg` and design), orange should go dark orange (same for blue); currently orange becomes blue. Please make the organge button hover like the orange button in the middle column of the StyleGuide, the active state (get there with TAB) should be like the right column in the StyleGuide (no round edges).

* On the "Getting started" page:

  * Terms of service links do not have proper hover/active states (I expect the icon AND text to be both clickable and change together on hover, button should get darker like the orange buttons in the StyleGuide)
  * FAQ links should (both text AND icon) have hover states like the terms of service links. Collapsing/uncollapsing needs a little animation (see the `aniate.css` node module).
  * The first FAQ button is smaller (on Firefox); shouldn't be.

* Links in the footer have active/hover state that pushes down the underlying items (on Firefox), with their underlines it seems. This should not be.

* The private beta label:

  * Shows in the top left corner on desktop.
  * Not showing for some middle breakpoints, should be,
  * Needs a bit more padding at top and bottom of the text on mobile.

* Mobile - The header (Ethereum made simple + man in chair) of the home page (`/`) looks not so good at some breakpoints. Please fix.

* Mobile - The "Currency for the digital ers + girl with mobile" part looks bad at "middle width" breakpoints; also the button stays too much to the right on the smallest breakpoints. Please fix.

* Mobile - SMALL CHANGE REQUEST In the 3-column starting with "01- [...] Sign up" it would be nice if the the default and active/hoover states is switched compared to the desktop variant. So that on small breakpoints (mobile) the button is pinkish by default, on desktop width the button is a black outline by default. Please fix.

  * Please read again: on mobile simply switch the hovered for the non-hovered state and vise-versa. The opague thing just looks out of character with the rest of the design.

* Mobile - Learn more page: padding of the balls is off in "middle breakpoints" (they seem not to have any padding on Firefox); the zoom animation does not feel right (rather have no animation than the zoom one in this case); the "Learn more ->" links miss an active/hoover state. Please fix.

  * Balls become eggs now. Please just ensure they have enough padding and stay balls at all breakpoints.
  * "Learn more ->" links still need better hover/active states. (pink underline like in the StyleGuide maybe?)

* Mobile - Getting started page: padding with the screen edges seems off for *many* components at small and middle width breakpoints. Only desktop width breakpoints looks well; and the "How can I help" person widget should be centered.

  * phone number and email address should get centered
  * some overlapping goes wrong for middle breakpoints, please fix.

* Mobile - Please add menu animation (slide in and slide out) as shown in the Indesign designs as shown in `04 - Schermen/mobile`

* Mobile - Padding of elements on the right (arrows and cross) is to little in the menu.

  * Please ensure the padding between the cross, the arrows, the `>`s and the left window border is the SAME as elements have with the left window border side.

* Mobile - "Search..." placeholder text is not properly visible on Firefox.

* Mobile - In the mobile menu the fat pink underline seems off and pushes the rest of the content down on Firefox. The hover state should show when hovering anywhere over the whole width of the buttong, and should only making the background a little lighter green (after which the arrow should be in white) and/or giving the text a normal white underline (when hovering anywhere over the button) would work better as an active/hover state I think.

* Mobile - In the menu the logo is a little blurred. Please also use SVG.

* Mobile - Please ensure the menu's cross is more aligned with the hamburger button that opens the menu. Also make sure the cross gets "link hover" mouse pointer.

* Create a better favicon logo. I suggest the "U" of the logo in white on a the "green/blue" (dark turquoise, #204f5a, a color of the design) background.

* Please make an example page with a working image and video component.

* There are quite some alligning issues at various breakpoints, such as elements ending up with no padding to the window edge. Please fix.

* Please look into the "unmet peer dependency" warnings when fetching deps. More info here (2nd answer seems very insightful) https://stackoverflow.com/questions/35738346/how-do-i-fix-the-npm-unmet-peer-dependency-warning

  * not sure how harmful this is...
  * they could be installed manually (as mentioned in the second answer) or added explicitly to the packages.json

* Please look into the error when running `yarn start`: `Error loading a result for the page query in "/en//support". Query was not run and no cached result was found. Page not found /en//support` (more of this kind are shown)


