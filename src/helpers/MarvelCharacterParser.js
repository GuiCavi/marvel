export class MarvelCharacterParser {
  static parse(results) {
    const newData = results.map((character) => {
      const {
        id,
        series,
        events,
        thumbnail,
        name,
      } = character;

      return {
        id,
        name,
        image: `${thumbnail.path}.${thumbnail.extension}`,
        events: events.items.map((event) => event.name),
        series: series.items.map((serie) => serie.name),
      };
    });

    return newData;
  }
}
