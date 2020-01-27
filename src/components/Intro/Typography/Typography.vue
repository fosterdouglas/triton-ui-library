<docs>

<h3>Page Title</h3>
<p>Used exclusively for titles of pages, typically to label the top of a <a href="../../#/Navigation/SideNav">Side Nav</a>. Uses the ```<h2>``` tag and is almost always set in Triton Blue color.</p>

```jsx
<template>
  <div>
    <h2>Edit Client</h2>
  </div>
</template>
```

<h3>Support Title</h3>
<p>Sometimes found at the top of the main content of a page, a secondary indication of the current page (mirrors the Menu Item). Uses ```<h4>```.</p>

```jsx
<template>
  <div>
    <h4>Transactions</h4>
  </div>
</template>
```

<h3>Sections</h3>
<p>Section headers are for complex pages that require additional organization or labeling that can't be achieved via other means. Uses a slightly modified version of <a href="../../#/Elements/Rows">Title Row Component</a>.</p>

```jsx
<template>
  <div>

    <b-button
      block
      class="rowItem rowGroupTitle cursorDefault"
      variant="none"
      onclick="this.blur();"
    >
      <div class="rowItemContent">
        <div class="rowItemText">
          <p class="mb-0">Address</p>
        </div>
        <div class="rowItemSuffix">
        </div>
      </div>
    </b-button>

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

<h3>Common Text</h3>
<p>The text size for the majority of uses outside of titles.</p>

```jsx
<template>
  <div>
    <p>Welcome to the Triton platform.</p>
  </div>
</template>
```

<h3>Support Text</h3>
<p>For a <a href="../../#/Navigation/Breadcrumb">Breadcrumb</a> component, the <a href="../../#/Navigation/Navs">Footer</a>, or other situations where text can be de-emphasized.</p>

```jsx
<template>
  <div>
    <span class="supportText">© Triton 2019</b-badge>
  </div>
</template>
```

<h3>Tiny Text</h3>
<p>Reserved for footnotes, email footers, and other optional items, for example for the notification number used in a <a href="../../#/Navigation/Navs">Top Nav</a> component. It can also be used as a badge.</p>

```jsx
<template>
  <div>
    <b-badge variant="-">To unsubscribe, please click here.</b-badge>
    <br/>
    <b-badge variant="dark">UNSUBSCRIBE</b-badge>
  </div>
</template>
```

</docs>
