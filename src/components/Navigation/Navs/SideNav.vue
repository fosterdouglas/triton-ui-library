<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Update nav item interactivity</li>
        <li class="alertListItem">- Refactor for Vue.js</li>
        <li class="alertListItem">- <del>Distribute components into separate files</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- WCAG adjustments</li>
        <li class="alertListItem">- <del>add underline for current selection?</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Initiate</del> <i class="iconConfirm"></i></li>
      </ul>
  </b-alert>

</div>
```

<h3>Side Nav</h3>

```js
<div>

  <!-- FOR STYLEGUIDE ONLY -->
  <div class="row ml-1">
  <!-- FOR STYLEGUIDE ONLY -->

  <b-nav class="sideNav" vertical pills>
    <b-nav-item disabled><h2>Nav Title</h2></b-nav-item>
      <b-nav-item disabled>Title of This Group</b-nav-item>
        <b-nav-item @click="active = !active">Test Nav Item</b-nav-item>
        <b-nav-item class="edited">Test Nav Item</b-nav-item>
        <b-nav-item>Test Nav Item</b-nav-item>
      <b-nav-item disabled>Title of This Group</b-nav-item>
        <b-nav-item>Test Nav Item</b-nav-item>
        <b-nav-item active>Test Nav Item</b-nav-item>
        <b-nav-item>Test Nav Item</b-nav-item>
      <div class="nav-break"></div>
        <b-nav-item>Test Nav Item</b-nav-item>
        <b-nav-item>Test Nav Item</b-nav-item>
        <b-nav-item>Test Nav Item</b-nav-item>
  </b-nav>

  <!-- FOR STYLEGUIDE ONLY -->
  <div class="col border border-medium mr-3" ></div>
  <!-- FOR STYLEGUIDE ONLY -->

</div>
```

</docs>
