## Battle of Britain

This map showcases how you can use the video features from Mapbox GL and the Mapbox data set editor
to create beautiful historic maps!

**:globe_with_meridians: Check the demo at http://battleofbritain.lukasmartinelli.ch**

![Battle of Britain Map](https://cloud.githubusercontent.com/assets/1288339/21693935/26d97898-d383-11e6-9618-7c5b26dc1001.png)

## How it works

The smoke video contained in the `video` folder is used as base layer to create a nice dynamic effect.
For the water and waterways the Mapbox Streets vector data source has been used (although you could use any vector tileset for this). All other features were created with the Mapbox dataset editor.

## Edit the Style

Use the [Maputnik CLI](https://github.com/maputnik/editor) to edit and develop the style.
After you've started Maputnik open the editor on `localhost:8000`.

```
maputnik --watch --file style.json
```

You can also edit the style in Mapbox Studio by removing the video layer and source and uploading the
SVGs and style to Mapbox Studio.
