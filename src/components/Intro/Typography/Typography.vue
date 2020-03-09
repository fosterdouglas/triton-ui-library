<docs>

<h3>Page Header</h3>
<p>For top-of-page clarity, generally contains the name of the currently selected side bar item. Uses the ```<h2>``` tag.</p>

```jsx
<template>
  <div>
    <h2>Edit Client</h2>
  </div>
</template>
```

<h3>Support Header</h3>
<p>Used occassionally, for de-emphasized clarity. Uses the ```<h3>``` tag.</p>

```jsx
<template>
  <div>
    <h3>Edit Client</h3>
  </div>
</template>
```

<h3>Section Title</h3>
<p>Found at the top of the main content of a page (mirroring the selected item from the Top Nav, or the selected item of the Side Nav if present). Uses ```<h4>``` and is often paired with a "expand/collapse all" button.</p>

```jsx
<b-container class="pageHeader" fluid>
  <b-row align-v="center">
    <b-col>
      <h4>Client Details</h4>
    </b-col>
    <b-col sm="auto" align-self="end">
      <b-button
        :pressed="false"
        variant="outline-primaryfade"
        class="btnSmall cursorDefault expandAll text-dark"
        onclick="this.blur()"
       >
        <i class="iconSort fa-lg iconBorderMini"></i>
      </b-button>

    </b-col>
  </b-row>
</b-container>
```

<h3>Group Headers / Menu Items</h3>
<p>For menu items, and used to categorize subsections of like functions (used inside of ```.sectionGroup```). Uses ```<h6>``` and uppercase styling.</p>

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
<p>Reserved for footnotes, email footers, and other optional items, for example for the notification number used in a <a href="../../#/Navigation/Navs">Top Nav</a> component. It's also used inside of the badge component.</p>

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
