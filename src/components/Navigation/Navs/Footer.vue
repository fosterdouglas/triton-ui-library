<docs>

<h3>Footer</h3>
<p>Reserved for copyright information and for a contact button or details.</p>

```js
<template>
<div>
  <footer class="row">
    <b-col class="text-left footerItem">© Triton 2019, All Rights Reserved</b-col>
    <b-col class="text-right">
      <b-button
        :pressed="false"
        variant="outline-light"
        size="sm"
        class="btnThin"
        onclick="this.blur();"
        >
        <div class="btnText">CONTACT</div>
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
