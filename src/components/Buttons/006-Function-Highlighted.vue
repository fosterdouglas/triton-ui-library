<docs>

<h3>Function - Highlighted</h3>
<p>This special variation of the function button is used for unique actions, or to stand out amongst a group of other function buttons.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlighted"
      >
      {{ FuncButtonCaption }}
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlighted"
      >
      <i class="fal fa-file-alt fa-lg btnIconLeft"></i>
      {{ FuncButtonCaption }}
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlightedPressed"
      >
      {{ FuncButtonCaption }}
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlightedPressed"
      >
      <span class="spinner-grow spinner-grow-sm btnIconLeft" role="status" aria-hidden="true"></span>
      {{ FuncButtonCaption }}
    </b-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        FuncButtonCaption: 'SAMPLE BUTTON'
      }
    }
  }
</script>
```

</docs>
