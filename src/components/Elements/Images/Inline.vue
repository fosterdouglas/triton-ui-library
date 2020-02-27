<docs>

<h3>Inline</h3>
<p>A standard inline image, but rarely used in the application.</p>

```js
<template>
  <div>
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
