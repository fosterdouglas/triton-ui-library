<docs>

<h3>Side Nav</h3>
<p>The Side Nav is used across the application as a sub-menu system. It should only be used to show and hide loaded content or to dynamically load content, but not for a URL change. The <span class="ml-1 edited"></span>pencil icon can be placed next to any menu tab name to represent that is has been edited. The nav is typically paired with a Save button, but isn't required for read-only page instances.</p>

```js
<template>
  <div>

    <b-card class="sideNav styleguidistOnlyStyles"  no-body>
      <b-tabs card vertical>

        <b-tab  disabled>
          <template v-slot:title><span>Title of This Group</span></template>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Test Nav Item</span></template>
          <b-card-text class="p-3">Tab contents 1</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Test Nav Item</span></template>
          <b-card-text class="p-3">Tab contents 2</b-card-text>
        </b-tab>

        <b-tab>
          <template v-slot:title><span>Test Nav Item</span></template>
          <b-card-text class="p-3">Tab contents 3</b-card-text>
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
              Test Nav Item<i class="iconCollapseExpand fa-rotate-90"></i>
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
        <template v-slot:tabs-end>
          <div class="mt-3 mr-4 ml-4">
            <b-button
              disabled
              :pressed="false"
              variant="-"
              id="changesBtn"
              class="btnNavigation btnDisabled w-100"
              onclick="this.blur();"
              @click="toastConfirm()"
              >
              <i class="iconSave"></i>
              <div class="btnText">SAVE CHANGES</div>
            </b-button>
          </div>
        </template>
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
