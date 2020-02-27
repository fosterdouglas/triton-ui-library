<docs>

<h3>Status (Incomplete)</h3>
<p>An example of what a timeline flow looks like in progress.</p>

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

      <b-row class="timelineInProgress timelinePending">
        <b-col>
          <i class="timelineStatusIcon"></i>
          <span class="timelineStatusText"></span>
          <div class="timelinePath"></div>
        </b-col>
        <b-col>
          <p class="timelineDescriptionDate">TBD</p>
          <p class="timelineDescriptionText"></p>
        </b-col>
      </b-row>

      <b-row class="timelineCompleted timelinePending">
        <b-col>
          <i class="timelineStatusIcon"></i>
          <span class="timelineStatusText"></span>
          <div class="timelinePath"></div>
        </b-col>
        <b-col>
          <p class="timelineDescriptionDate">TBD</p>
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
