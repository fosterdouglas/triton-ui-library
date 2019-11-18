<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75">App Navigation buttons are used as a means to get around the application.
  They typically "go somewhere" as opposed to the <a class="text-info" href="../../../#/Buttons/Functional">Functional</a> buttons which "do something," although that
  is a generalization for categorizing.
</p>
<br/>
</div>
```

<h3>Standard</h3>
<p>The primary button used for application navigation.

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-primaryfade"
      class="btnNavigation btnStandard"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i class="iconArrow btnIconRight"></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-primaryfade"
      class="btnNavigation btnStandardPressed"
      onclick="this.blur();"
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

    <b-button
      :pressed="null"
      variant="outline-primaryfade"
      class="btnNavigation btnDisabled cursorDisabled"
      onclick="this.blur();"
      disabled
      >
      <i></i>
      <div class="btnText">{{ NavButtonCaption }}</div>
      <i></i>
    </b-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        NavButtonCaption: 'SAMPLE BUTTON'
      }
    }
  }
</script>
```
</docs>
