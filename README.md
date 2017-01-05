## Battle of Britain

This map showcases how you can use the video features from Mapbox GL and the Mapbox data set editor
to create beautiful historic maps!

**:globe_with_meridians: Check the demo at http://battleofbritain.lukasmartinelli.ch**

[![Battle of Britain Map](https://cloud.githubusercontent.com/assets/1288339/21701568/9453fe7a-d3a6-11e6-9c15-594198569632.png)](http://battleofbritain.lukasmartinelli.ch)

## How it works

The smoke video contained in the `video` folder is used as base layer to create a nice dynamic effect.
For the water and waterways the Mapbox Streets vector data source has been used (although you could use any vector tileset for this). All other features were created with the Mapbox dataset editor.

The datasets have been exported from Mapbox Studio as GeoJSON and are available in the `datasets` directory.

- [`battle_of_britain_radar.geojson`](/datasets/battle_of_britain_radar.geojson): Radar reach linestrings and radar station points
- [`battle_of_britain_bombed_towns.geojson`](/datasets/battle_of_britain_bombed_towns.geojson): Bombed towns points
- [`battle_of_britain_geonames.geojson`](/datasets/battle_of_britain_geonames.geojson): Important geographic country, city and sea names.
- [`battle_of_britain_command_groups.geojson`](/datasets/battle_of_britain_command_groups.geojson): Zones and names of the reponsible command groups for an area.
- [`battle_of_britain_fighter_bases.geojson`](/datasets/battle_of_britain_fighter_bases.geojson): Fighter and bomber bases of the Germans and Brits.

## Edit the Style

Use the [Maputnik CLI](https://github.com/maputnik/editor) to edit and develop the style.
After you've started Maputnik open the editor on `localhost:8000`.

```
maputnik --watch --file style.json
```

You can also edit the style in Mapbox Studio by removing the video layer and source and uploading the
SVGs and style to Mapbox Studio.
