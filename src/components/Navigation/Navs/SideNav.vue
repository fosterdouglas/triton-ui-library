<docs>

<h3>Side Nav</h3>
<p>The Side Nav is used across the application as a sub-menu system. It should only be used to show and hide loaded content or to dynamically load content, but not for a URL change. The <span class="ml-1 edited"></span>pencil icon represents content tabs that have been edited. The nav is typically paired with a Save button, but not required for read-only page instances.
  <br/>
  <br/>
<span class="text-info">
Note, the sub nav expanding menu isn't fully functioning, and still requires correct Vue integration to support the "tab content" system that standard nav menu items utilize.
</span>
</p>

```js
<template>
  <div>

    <b-card class="sideNav styleguidistOnlyStyles" no-body>
      <b-tabs card vertical>

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


        <!--
        
        <b-tab>
          <template v-slot:title>
            <div variant="-"
              class="navSubTitle"
              :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-10"
              @click="visible = !visible">
              Test Nav Item<i class="iconChevron fa-rotate-90"></i>
            </div>

          </template>
        </b-tab>

        <b-tab disabled>
          <template v-slot:title>
          <b-collapse v-model="visible" class="navSubNav" id="collapse-10">
            <b-button class="navSubLink" variant="-">
              <a class="nav-link" href="#">Test Nav Sub-Item</a>
            </b-button>
            <br/>
            <b-button class="navSubLink" variant="-">
              <a class="nav-link" href="#">Test Nav Sub-Item</a>
            </b-button>
            <br/>
            <b-button class="navSubLink" variant="-">
              <a class="nav-link" href="#">Test Nav Sub-Item</a>
            </b-button>
          </b-collapse>
        </template>
        </b-tab>

        -->

      </b-tabs>
    </b-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  }
</script>
```

</docs>
