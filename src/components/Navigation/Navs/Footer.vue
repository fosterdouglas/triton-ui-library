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

<h3>Footer</h3>
<p>...</p>

```js
<template>
<div>
  <footer class="row">
    <b-col class="text-left py-1">© Triton 2019, All Rights Reserved</b-col>
    <b-col class="text-right">
      <b-button
        :pressed="false"
        variant="outline-light"
        size="sm"
        class="btnThin"
        onclick="this.blur();"
        >
        <i></i>
        <div class="btnText">CONTACT</div>
        <i></i>
      </b-button>
    </b-col>
  </footer>
</div>

</template>
<script>
export default {
}
</script>
```


</docs>
