<docs>

```jsx noeditor
<template>
  <div>
    <div class="pl-4 mb-4 mt-2 text-justify">
      <h3 class="bg-secondary text-white py-2 px-3 d-inline-flex mt-4 mb-3" style="width:auto;">Current List of Known Issues</h3>
      <div class="pl-4 mb-4 mt-2 text-justify">
        <p>
          <ul>
            <li>- All dropdown selects should have "mediumdark" text displaying the unchosen status, and should change to "dark" when any valid option is selected. It doesn't seem like this is something that can be done using CSS (even the most hacky of solutions), we'll need some simple JS to do it.</li>
            <li>- JQuery UI elements inside of lightboxes will typically not function without some alteration. Currently, the ".sortable()" function is being called when the lightbox is "shown", but a more elegant and sustainable solution is still required.</li>
            <li>- The prepend buttons for Check Box, Switch, and Radio can only be clicked specifically on the element, but don't function if you click elsewhere on the button. Needs a simple JS fix.</li>
            <li>- Persistent vertical/horizontal scroll bar missing on Firefox (unfortunately, will likely need a JS solution)</li>
            <li>- The "package" and "plus" icons will shift on hover, but no other icons do (fontawesome bug? might be fixed when switching to svg/v-icon)</li>
          </ul>
        </p>
      </div>

      <h3 class="bg-dark text-white py-2 px-3 d-inline-flex mt-4 mb-3" style="width:auto;">Most Recent Update</h3>

      <ul>
<h4>v1.2.0 - Browser Testing!</h4>
<li>- update browser compatibility chart</li>
<li>- fixed font weight discrepencies (by using antialiased font smoothing by default, and -moz-osx-font-smoothing: grayscale for Firefox)</li>
<li>- update h3 color for styleguide (was conflicting with main css file)</li>
<li>- fix spinner icon alignment (All browsers)</li>
<li>- make height of append buttons fixed to 34px (Safari and Firefox)</li>
<li>- attempted to fix no persistent scrollbar in Firefox, but Firefox doesn’t currently support</li>
<li>- fix download icon hover position on images (for Firefox and Safari)</li>
<li>- update height of timeline path (Safari)</li>
<li>- b-form-input requires a blank space value for placeholder (placeholder=” “) to be fully compliant with the small text design, hoping to find alternative solution in the future (All Browsers, was mostly a Firefox issue though)</li>
<li>- looked into disabled browser default date picker, will need some JS to do so (Firefox)</li>
<li>- fixed issues with doubling placeholder text (Firefox)</li>
<li>- did research on custom input cancel/clear elements, seems only supported on Webkit browsers for now (Firefox)</li>
<li>- fix weird animation on collapse toggling open, by transition property only on Height (Firefox)</li>
<li>- update border color/size on row items (All Browsers, to help fix Safari not supporing sub-1px box-shadow sizes)</li>
<li>- update border color on prepend buttons to match that change ^</li>
<li>- prepend button border being cut off, fixed with vertical-align being unset (Safari)</li>
<li>- fiddle with type=“date” to figure out how its working, use “search” type instead for now (Safari)</li>
<li>- remove outline after clicking an item inside of a dropdown toggle (Safari)</li>
<li>- remove Quill editor for now (wasn’t doing anything anyway, barely working on Safari/Firefox)</li>
<li>- fixed User Nav getting cut off in the UI Test Env, was some silly Styleguidist margin issue (Safari)</li>
</ul>

    <h3 class="bg-dark text-white py-2 px-3 d-inline-flex mt-4 mb-3" style="width:auto;">Past Updates</h3>

        <ul>
          <h4>v1.1.0 - Mar 9 2020</h4>
    <li>- add UI Refresh A and UI Refresh B to Examples side bar (currently just duplicates of Kitchen Sink)</li>
    <li>- rename Kitchen Sink to UI Test Environment</li>
    <li>- update positioning of form field placeholders</li>
    <li>- add a Small Group for form field grouping and styling, with various color options</li>
    <li>- make css rules for buttons inside of small group, centering them when there’s only one and splitting them to Left/Right when there are 2</li>
    <li>- add text-valid and text-invalid beneath form fields</li>
    <li>- colorize upper placeholder on form fields for is-valid and is-invalid</li>
    <li>- add a fourth, dimmed color for form field button, generally for Cancel/Back </li>
    <li>- add Radio Select section for form groups</li>
    <li>- move DOB from general category to text category</li>
    <li>- fixed a styleguidist bug/problem where hitting back button while on a page with side bar removed won’t return the sidebar to visible</li>
    <li>- implement h2 tag in the typography hierarchy as a Page Header (avoided it to prevent redundancy, but will be useful for clarity of pages)</li>
    <li>- experiment with adding a quick user search on the side bar (in ui-test-environment), will be a crowd favorite at Triton I’m guessing!</li>
    <li>- add the name of the current client to the side bar (in ui-test-environment)</li>
        </ul>

    <ul>
      <h4>v1.0.0 - Feb 27 2020</h4>
    <li>- updated every single piece of descriptive text of every component </li>
    <li>- remove all "task lists" on all pages</li>
    <li>- generally update components to follow and fully support the standard b-container/b-row/b-col structure</li>
    <li>-update switch color “on” state from Green to Dark Grey (to avoid issues when “on” doesn’t always correlate with something being “affirmative”, for example Override)</li>
    <li>- add icon for Package</li>
    <li>- add icon for “Linked” (tentative)</li>
    <li>- add secondary icon for a User, one is for personal Account, one is for general User</li>
    <li>- completely new section “API Configuration” in Kitchen Sink, utilizing dozens of new optimizations and HTML organizations. prepped and “semi functional”, enough for the walkthrough video made</li>
    <li>- solidify support for multiple “append” buttons on row items, implemented them in API Configuration section of Kitchen Sink</li>
    <li>- testing long scroll Lightbox window, likely thinking “scrollable” prop should not be used, to prevent situation where a user tries to complete a Lightbox form without seeing all of the questions/content</li>
    <li>- set width for “Small” buttons, 44px</li>
    <li>- rework how margins work on all row items</li>
    <li>- refactor how the sub nav works on Packages page</li>
    <li>- lots of additional work to make SubNav properly sticky and responsive, and for dynamic content sizing (but fixed widths still) for pages with subnav vs without</li>
    <li>- update page/tab headers to include a thin bottom border, and support for Expand All / Collapse All button</li>
    <li>- tweak the Timeline design slightly, to be a little simpler/clearer</li>
    <li>- update style of Table headers</li>
    <li>- officially added a “userNav” class and component page, to be used for a potential thin sticky top bar nav</li>
    <li>- redesign "prepend" and "append" button organization to be completely modular</li>
    <li>- change style of radio button, switches, and checkboxes to fit better with new "prepend" style</li>
    <li>- implement a simple webkit custom scrollbar (particularly useful to indicate horizontal scrolling on tables)</li>
    <li>- rework all of the buttons to use container/row/col structure more smoothly</li>
    <li>- added a Change Log to the bottom of the Introduction page</li>
    <li>- restyled and updated Introduction page</li>
    <li>- update hover styles/icon for inline images and thumbnail images</li>
    <li>- updated some styling of the Timeline component, and refactored it using 99% CSS-only, just the date/time value will need to be dynamic</li>
    <li>- added a new type of Table, expanded some Table options</li>
    <li>- new button style specifically for Forms</li>
    <li>- new "Small Group" component for Forms, still under construction and testing</li>
    <li>- removed Date Range Picker, can probably use the BV one now that it exists</li>
    <li>- a million other tiny updates that were impossible to track</li>
    </ul>

        <ul>
          <h4>v0.9.9 - Feb 3 2020</h4>
          <li>- added new icon for “API” </li>
          <li>- update Chevron icon to more of a “Triangle” type shape ▶️ </li>
          <li>- changes to now support multiple “append” icons to a given row</li>
          <li>- work on styling for the “info box” button, which will be appended to many rows</li>
          <li>- add custom chevron + animation to top nav groupings</li>
          <li>- update styles for Filter Dropdown</li>
          <li>- testing additional uses/scenarios for the “?” info popup</li>
          <li>- update User icon to round one</li>
          <li>- sticky user/account bar! </li>
          <li>- for user/account bar: conceptualized some  “super admin” “triton admin” “support” “user” styles for potential future role differentiation/features, basic/hacky implementation just to illustrate the UX, find it at the top right of top-bar in Kitchen Sink NOTE: many styles aren’t implemented yet, particularly to correctly theme dropdowns to the variant of their parent</li>
          <li>- add a Plus icon, no idea why I didn’t have this yet</li>
          <li>- change icon for “user” to a “id card” style, not sure if will keep this</li>
          <li>- fixed “Examples” page (i think)</li>
        </ul>

          <ul>
            <h4>v0.9.8 - Feb 1 2020</h4>
          <li>- update to Bootstrap-Vue 2.3.0, caused no major adjustments, just a few :focus issues to tweak</li>
          <li>- added Landing Page Configuration to Kitchen Sink (currently under “Global Options” sub-nav of Packages page, only temporarily until re-organized)</li>
          <li>- added API Configuration to Kitchen Sink (also under “Global Options”), still working on some specifics with @jon on how/if to organize multi-package API assignments</li>
          <li>- updated color of side bar’s “active”  item (Triton Blue, yay!)</li>
          <li>- add support/utilization for “monospace” font in places that display values along side labels (currently only used in Kitchen Sink, will add documentation shortly when more confirmed)</li>
          <li>- add simple animation for rotation chevrons on all drop downs</li>
          <li>- removed almost all instances of the “dash” in the row prefixes, was ultimately just adding up to be visual clutter</li>
          </ul>

          <ul>
            <h4>v0.9.7 - Jan 27 2020</h4>
          <li>- update BV modals to support JqueryUI dropdowns inside them  (needs more robust solution eventually)</li>
          <li>- update “prepend” for text boxes to correctly resize if using just an icon (like for Search)</li>
          <li>- update custom-switch to absolute positioning</li>
          <li>- change “trade” icon to “swap”</li>
          <li>- adjust positioning and styling of radio buttons </li>
          <li>- lots of general cleanup of the guide</li>
          <li>- started on a beginning draft of Triton 5-0 survey flow, lots of work left on thinking through this yet</li>
          </ul>

          <ul>
            <h4>v0.9.6.5 - Jan 7 2020</h4>
<li>- fixed choppy expand/collapse on b-collapse (padding must be set on an element inside the collapse, not on it)</li>
<li>- fix radio button alignment</li>
<li>- adjust “status” row element to use badges to indicate status</li>
<li>- adjust badge text color</li>
<li>- a million more updates and adjustments and experiments to Kitchen Sink (check Packages tab)</li>
<li>- add a “current list of known issues” to Introduction page, at bottom</li>
</ul>

<ul>
  <h4>v0.9.6 - Jan 4 2020</h4>
<li>- fixed very bothersome bug with checkbox checkmark and switch positions shifting when other elements on a page shift</li>
<li>- work on usability using clear styling of groups / headers</li>
<li>- additional animations and styling added to the rowTitle class, and hooked them to collapsible groups on the Kitchen Sink page</li>
<li>- darken some colors</li>
<li>- add “Edit Packages List” button to the bottom of the Packages subnav on Packages page</li>
<li>- remove “Assigned Packages” header from subnav, a little bit obvious so don’t need it as its just visual clutter</li>
<li>- enable lightbox when “Edit Packages List” button is clicked, JQuery UI isn’t yet functioning inside of modal</li>
<li>- add new lightbox variation “Data” with specific methods of dismissing particular to only displaying static data</li>
</ul>

<ul>
  <h4>v0.9.5 - Dec 24 2019</h4>
<li>- more updates to Section Title </li>
<li>- fix placeholder text on Select Dropdown (oops, “b-select” is not a thing)</li>
<li>- tweaks on input-group-append to support “?” hover tooltip</li>
<li>- a million more updates and tweaks to components after playing around in the Kitchen Sink</li>
<li>- update general style on menu dropdown items, on hover and on click</li>
<li>- add/test a Save Changes button to kitchen sink side nav</li>
<li>- add/test an “Edit” button beside a text field</li>
<li>- add underline to section title</li>
<li>- lots and lots and lots of terribly tedious changes to differentiate “Side Nav” from “Vertical Tabs”</li>
<li>- implement said Vertical Tabs on the Packages page of Kitchen Sink as a secondary static side nav, hoping it can bring some order to the chaos</li>
<li>- tweak said secondary static side nav to be slightly more… reusable</li>
<li>- many many CSS tweaks and efficiencies, particularly with checkbox/switch/radio button</li>
<li>- enable/allow box shadow on input’s :focus (and allow them to be tab selected)</li>
<li>- added side nav expandable sections (just basic for now, needs better Vue integration support and potential styling tweaks)</li>
<li>- did 1,000 changes and tweaks to Kitchen Sink, an early attempt at organizing the Packages page via some nesting/collapsing groups</li>
</ul>

<ul>
  <h4>v0.9.3 - Dec 12 2019</h4>
<li>- add/change more styling to Filter Dropdown, and add style support for badge number (but non functioning technically speaking) </li>
<li>- remove border radius from .badge class</li>
<li>- start work on a “kitchen sink showcase” example, with the goal of making browser troubleshooting/testing a bit simpler (can be found at the button underneath the Browser Compat chart) </li>
<li>- did a ton ton of micro adjustments to various components as starting to implement them into Kitchen Sink and understanding better how they interact </li>
<li>- many random fixes as a result of those ^ adjustments. some minor things still a little broken</li>
<li>- adjust hover and focus states on text input boxes</li>
<li>- add min-width and max-width to primary content area (tab-content in the case of Kitchen Sink), to provide some responsiveness but retain some control to prevent bizarre UX at huge and tiny browser window sizes (might be pointless, may be worth just using a fixed width center area)</li>
<li>- update h5 styles to use as a group title, then undo all those changes and use row component rowTitle instead</li>
</ul>

<ul>
  <h4>v0.9.2 - Dec 9 2019</h4>
<li>- more OCD designer tweaks on the toggle switch</li>
<li>-  fix/enable custom close icon on Search Box component and DOB component (unfortunately, will only have aesthetic support on chrome/opera/safari)</li>
<li>- add custom downward Carat to Select dropdown</li>
<li>- (re)add text editor; not necessarily a solution specifically for JSON stuff but still a useful component</li>
<li>- add specific Prepend styles for disabled Text Field</li>
<li>- add Filter icon</li>
<li>- add a Filter Dropdown component; needs a lot of tweaks yet, and will eventually need a function to indicate the number of activated filters, like a badge number</li>
</ul>

<ul>
  <h4>v0.9.0 - Dec 5 2019</h4>
<li>- adjust site-wide styleguidist to use set width for component showcase areas (1000px for now)</li>
<li>- add “Trade” icon </li>
<li>- add Sortable component; i like this one! </li>
<li>- add icons to Sortable items (currently, the “arrow” direction is not dynamic after dragging to another group)</li>
<li>- update btnSmall for additional compatibility use inside of row elements</li>
<li>- removed the double bar icons ( | | ) previously used to indicated “draggable” elements; designing some other solution that’s less cumbersome and less conflicting/confusing with any potential nearby icons</li>
<li>- update text colors on Highlighted Row Component</li>
<li>- remove bootstrap’s default transparent 1px border on .btn class; i’m sure it’s there for good reason but removing it fixed numerous alignment issues across the entire design system</li>
<li>- adjust border radius on .alert (not sure how I missed that this whole time)</li>
<li>- minor update to Examples page to fix Footer</li>
<li>- add option for adding prepended fixed labels to Text Fields; supports icons as well, for example with the Search Box  !</li>
<li>- update On/Off coloring for custom switch, mostly WCAG/colorblind compliant ( )</li>
<li>- additionally, tweak On/Off coloring for the disabled state</li>
<li>- add thin border to right side of Moveable/Sortable row elements</li>
<li>- start on styles for timeline component</li>
<li>- more tweaks to On/Off toggle and WCAG stuff</li>
<li>- add Ellipsis icon</li>
<li>- first round of styles for Timeline</li>
</ul>


<ul>
  <h4>v0.8.6 - Dec 3 2019</h4>
<li>- update Browser Compat chart with additional info on hover</li>
<li>- update styling / padding of Lightbox view</li>
<li>- move Disabled buttons to own category</li>
<li>- add color variants for hover-enabled and click-enabled Popovers</li>
<li>- add Date Picker (finally!), still needs some tweaks</li>
<li>- streamline styles/classes for :disabled text fields and text field areas</li>
<li>- change date picker to Date Range Picker (for now), and added multi-month and range select styles; needs more work to add separate select boxes</li>
<li>- add new Text menu group and rearrange Input components a little</li>
<li>- add a robust and solid generic Select box, finally ( )</li>
<li>- as a result, restyle/edit the Autocomplete to match (add :hover and :active states, etc)</li>
<li>- add basic DOB input, using text-only input</li>
</ul>


<ul>
  <h4>v0.8.3 - Nov 28 2019</h4>
<li>- add an “Inherited” specialty icon</li>
<li>- update green (“confirm”) color to Triton brand green </li>
<li>- update blue (“info”) color to Triton secondary blue</li>
<li>- add “Info” styled header alert, used for things not inherently positive or negative</li>
<li>- rework padding on all buttons</li>
<li>- added a Disabled+Loading Button </li>
<li>- remove drop shadow from disabled button style for additional de-emphasis</li>
<li>- remove  and optimize many hundreds of lines of outdated or useless CSS</li>
<li>- adjust icon-sized buttons to be consistent with height of all other buttons</li>
<li>- added some more component descriptions</li>
<li>- cleaned up numerous other styles and classes</li>
<li>- add descriptions to many components that were missing them</li>
<li>- go through “Foster’s Task List” header on each page and clear out all finished tasks</li>
<li>- remove entirely the “Multi Select - Dropdown” (will be replaced with JQuery UI element eventually)</li>
<li>- add placeholder for Date Picker</li>
<li>- add Download icon</li>
<li>- add Download icon to img hover for a Downloadable Image</li>
<li>- add 2nd Breadcrumb attached to footer on Example page (tentatively necessary)</li>
<li>- adjust padding on table cells to match row component height</li>
</ul>

<ul>
  <h4>v0.8.0 - Nov 26 2019</h4>
<li>- added a Browser Support section to the introduction page (Safari currently completely unsupported, working on compatibility updates)</li>
<li>- add new “Thin” button variant (for footer and other de-emphasized uses)</li>
<li>- add Footer component </li>
<li>- add space for dedicated Contact button to Footer</li>
<li>- update Example page to include Footer</li>
<li>- update some typography, add Tiny Text</li>
<li>- simplify and change position of “delete” button from Upload File type of Row component</li>
<li>- remove border radius from all checkboxes to better align with general style</li>
<li>- fix style bug with Pagination component</li>
</ul>


<ul>
  <h4>v0.7.0 - Nov 20 2019</h4>
<li>- add an Examples page (bottom of the categories)</li>
<li>- add a Default Page Layout example!</li>
<li>- complete refactor of Side Nav for Vue (looks identical)</li>
<li>- Side Nav and Top Nav descriptions added</li>
<li>- added icons for Folder (Closed), Folder (Add), Folder (Delete)</li>
<li>- added classes for auto-cropping thumbnail images</li>
<li>- update all components to use new consolidated button style</li>
<li>- rework some css styles for nested Expanding Row components</li>
<li>- added new component type Tabs to navigation group page</li>
<li>- consolidated css classes for Side Nav</li>
<li>- deprecate secondary button style entirely, reorganize button location/organization</li>
<li>- add “loading” type buttons</li>
<li>- reorganize top nav / side nav into same category</li>
<li>- new custom Chevron icon for top nav dropdown groups</li>
<li>- complete overhaul of Side Nav for Vue</li>
<li>- tweak/perfect margins for side nav</li>
<li>- add ability to download Image on click / Downloadable component</li>
<li>- add Downloadable hover border style</li>
<li>- fixed styling bug where a button is treated as an A tag</li>
<li>- Add Design Reference Files section ! </li>
<li>- reformat side bar into clearer categories</li>
<li>- completely refactor how hover/focus state styles are applied to buttons</li>
<li>- adjust padding and spacings on all buttons</li>
</ul>


<ul>
  <h4>v0.6.0 - Nov 15 2019</h4>
<li>- fix error on Hover Enabled Popover</li>
<li>- update Feedback button to use Toasts instead of inline notification</li>
<li>- remove some “Foster’s Task Lists” from top of certain pages that have been completed</li>
<li>- start on Typography section ! in progress</li>
<li>- add support for badge-sized “notification” numbers on Nav bar links (like Print Queue uses)</li>
<li>- add Glossary and Typography sections (empty)</li>
<li>- work on styling a “Status” type for row element</li>
<li>- change Datalist (incompatible/uncustomizable) to Autocomplete function from JQuery UI</li>
<li>- add max height to Autocomplete for long lists</li>
<li>- remove default resize from large text input boxes</li>
<li>- add and style Auto Hide Toasts ! + description</li>
<li>- new fixed bottom “Priority” alert, for system outages (or cookie warning if needed in future)</li>
<li>- style .active class for top nav bar (yellow underline/box shadows)</li>
<li>- add Datalist component for Forms</li>
<li>- update :active border color on form fields </li>
<li>- fix/micro adjust on form field labels</li>
<li>- add instructions for using “required” text on form fields</li>
<li>- add component + basic styling of Pagination feature, for system functions that don’t lead to new URLs (same page)</li>
<li>- complete WCAG solution for Pagination</li>
<li>- add component + basic styling for Tables !</li>
<li>- remove border radius from small and mini icon buttons</li>
<li>- add component Top Nav, including dropdown menu styling</li>
<li>- Triton logo added to guide’s assets</li>
<li>- Filtering group component fix/update</li>
<li>- update border color on hover for all input elements</li>
</ul>

<ul>
    <h4>v0.5.0 - Nov 12 2019</h4>
<li>- add rowTitle class used for Radio List row element</li>
<li>- add Radio Group type for Forms</li>
<li>- start work on UI implementation road map</li>
<li>- update Form Field, Valid Form Field, and Invalid Form Field with dynamic text label, WCAG focus coloring, + other details</li>
<li>- add various descriptions to various components missing them</li>
<li>- fix Search Box close icon!</li>
<li>- update task lists at tops of most pages</li>
<li>- full refactor of “expanding” row component, now supports nesting multiple rows!!</li>
<li>- added various “highlighted” colors to row element</li>
<li>- fixed Moveable row element</li>
<li>- update Radio row element to be visually in line with others</li>
<li>- add “last updated” time stamp to footer of site (currently manually updated)</li>
</ul>

<ul>
  <h4>v0.4.0 - Oct 31 2019</h4>
<li>- resolve various runtime errors, renaming components to comply, unlinked scripts, cookies without SameSite attr</li>
<li>- work on setting cookies appropriately for upcoming Chrome change for how Secure/SameSite is handled (UNRESOLVED)</li>
<li>- organize buttons into correct groups, add ‘Icon’ button (replaces Small button)</li>
<li>- add Grab icon</li>
<li>- resize/reposition the checkbox ::after checkmark</li>
<li>- rebuild “uploaded file” row element</li>
<li>- optimize all “small” sized buttons with proper hover states and WCAG compliance</li>
<li>- add new icons for Previous, Calendar</li>
<li>- restyle “Enable/Disable” row element switch</li>
<li>- major: finished basic implementation of “expanding” row element</li>
<li>- placeholder for “expanding - accordian” element</li>
<li>- prep for “Top Nav Bar” dev</li>
<li>- fix some of “Side Bar Nav” interactivity issues</li>
<li>- swap confirm/cancel location buttons on all lightboxes</li>
<li>- refactor/restyle Close button,  apply everywhere</li>
<li>- remove Information icon entirely</li>
<li>- start on changing the form’s Text Field to dynamically resize / always show label</li>
<li>- added icons for arrow, chevron, file, question, remove, and spinner</li>
<li>- resize buttons to be identical to row element heights</li>
<li>- refactor Popover buttons to be cleaner</li>
<li>- make new Question hover popover to replace old tooltip</li>
<li>- deprecate Delete icon, to be replaced by Remove</li>
<li>- simplify how icons are placed inside of buttons</li>
<li>- added icons for arrow, chevron, file, question, remove, and spinner</li>
<li>- resize buttons to be identical to row element heights</li>
<li>- refactor Popover buttons to be cleaner</li>
<li>- make new Question hover popover to replace old tooltip</li>
<li>- deprecate Delete icon, to be replaced by Remove</li>
<li>- simplify how icons are placed inside of buttons</li>
</ul>

</div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
```

</docs>
