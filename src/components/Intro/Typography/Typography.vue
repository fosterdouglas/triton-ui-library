<docs>

<h3>Page Title</h3>
<p>Used exclusively for titles of pages, typically to label the top of the site's <a href="../../#/Navigation/SideNav">Side Nav</a>. Uses the ```<H2>``` tag and is almost always set in Triton Blue color.</p>

```jsx
<template>
  <div>
    <h2>Edit Client</h2>
  </div>
</template>
```

<h3>Sections</h3>
<p>Generally found at the top of the main content of a page, a secondary indication of the current page (mirrors the Menu Item). Uses ```<h4>``` and uppercase styling (tentatively).</p>

```jsx
<template>
  <div>
    <h4>Transactions</h4>
  </div>
</template>
```

<h3>Sub-Sections</h3>
<p>Only used occasionally, sub-section headers are for complex pages that require additional organization or labeling that can't be achieved via other means. Uses ```<h5>```.</p>

```jsx
<template>
  <div>
    <h5>Agent Client Exclusions<hr/></h5>

    <h5>Online Forms Settings<hr/></h5>

  </div>
</template>
```

<h3>Menu Items</h3>
<p>Exclusively for menu items. Uses ```<h6>``` and uppercase styling.</p>

```jsx
<template>
  <div>
    <h6>Client Details</h6>
    <h6>General Settings</h6>
    <h6>Reports & Invoicing</h6>
    <h6>Transactions</h6>
    <h6>Packages</h6>
  </div>
</template>
```

<h3>Common Text
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>...</p>

```jsx
<template>
  <div>
    <p>Testing</p>
  </div>
</template>
```

<h3>Support Text
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>...</p>

```jsx
<template>
  <div>
    <b-badge variant="-">Testing</b-badge>
  </div>
</template>
```

</docs>
