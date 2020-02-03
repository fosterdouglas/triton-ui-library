<docs>

```jsx noeditor
<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Fix various alignment issues.</li>
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
          <b-card-text><p>Tab contents 1</p></b-card-text>
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

<h3>Vertical
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>Note: this component works slightly differently in use. For now, it needed to be altered slightly to display correctly inside of the component library.</p>

```js
<template>
  <div>
    <b-card class="tabsNav border border-medium" style="height: 160px;" no-body>
      <b-tabs style="margin-right: 348px;" pills card vertical end>
        <b-tab title="Option 1" active>
          <b-card-text><p>Tab contents 1</p></b-card-text>
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
