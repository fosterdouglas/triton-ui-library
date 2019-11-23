<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- <del>Initiate</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Distribute components into separate files and rename</li>
      </ul>
  </b-alert>

</div>
```

<h3>Basic
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p></p>

```js
<template>
  <div>
    <b-card class="tabsNav" no-body>
      <b-tabs card>
        <b-tab title="Option 1" active>
          <b-card-text>Tab contents 1</b-card-text>
        </b-tab>
        <b-tab title="Option 2">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
        <b-tab title="Option 3">
          <b-card-text>Tab contents 3</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
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
