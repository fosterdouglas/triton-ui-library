<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- <del>Update nav item interactivity</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Refactor for Vue.js</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Distribute components into separate files</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- WCAG adjustments</li>
        <li class="alertListItem">- <del>add underline for current selection?</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>Initiate</del> <i class="iconConfirm"></i></li>
      </ul>
  </b-alert>

</div>
```

<h3>Side Nav</h3>
<p>The Side Nav is used across the application as a sub-menu system. It should only be used to show and hide loaded content or to dynamically load content, but not for a URL change. The <span class="ml-1 edited"></span>pencil icon represents content tabs that have been edited. The nav is typically paired with a Save button, but not required for read-only page instances.</p>

```js
<div>
  <b-card class="sideNav styleguidistOnlyStyles" no-body>
    <b-tabs pills card vertical>

      <b-tab disabled>
        <template v-slot:title><span><h2>Nav Title</h2></span></template>
      </b-tab>

      <b-tab disabled>
        <template v-slot:title><span>Title of This Group</span></template>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Test Nav Item</span></template>
        <b-card-text>Tab contents 1</b-card-text>
      </b-tab>

      <b-tab>
        <template v-slot:title><span class="edited">Test Nav Item</span></template>
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Test Nav Item</span></template>
        <b-card-text>Tab contents 3</b-card-text>
      </b-tab>

      <b-tab disabled>
        <template v-slot:title><div class="navBreak"></div></template>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Test Nav Item</span></template>
        <b-card-text>Tab contents 4</b-card-text>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Test Nav Item</span></template>
        <b-card-text>Tab contents 5</b-card-text>
      </b-tab>

      <b-tab>
        <template v-slot:title><span>Test Nav Item</span></template>
        <b-card-text>Tab contents 6</b-card-text>
      </b-tab>

    </b-tabs>
  </b-card>
</div>
```

</docs>
