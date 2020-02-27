<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75 mb-0">The timeline is used primarily on the Check Status page, as a way to visualize the process of a check and to inform the user where they are in the flow.</p>
<br/>
</div>
```

<h3>Single Entry</h3>
<p>The element that makes up a timeline group.</p>

```js
<template>
<div>

    <b-container class="containsRowItems timeline" fluid>

      <b-row class="timelineSubmitted">
        <b-col>
          <i class="timelineStatusIcon"></i>
          <span class="timelineStatusText"></span>
          <div class="timelinePath"></div>
        </b-col>
        <b-col>
          <p class="timelineDescriptionDate">December 8th 2019 - 12:22:19</p>
          <p class="timelineDescriptionText"></p>
        </b-col>
      </b-row>

    </b-container>

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
