<docs>

<h3>Standard</h3>
<p></p>

```js
<template>
  <div class="p-3 d-inline-flex">
      <b-img class="img-fluid" :src="images.sample" draggable="false"></b-img>
  </div>
</template>
<script>
export default {
    data() {
        return {
            images: {
                sample: require('../../../assets/hello-world.png')
            }
        }
    }
}
</script>
```

</docs>
