<docs>

<h3>Inline Downloadable</h3>
<p>Used in instances when a full image needs to be visible as well as include the ability to download the image on click.</p>

```js
<template>
  <div>
    <a class="imgLink" :href="images.sample" download>
      <b-img class="img-fluid" :src="images.sample" draggable="false"></b-img>
      <i class="iconDownload imgIcon"></i>
    </a>
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
