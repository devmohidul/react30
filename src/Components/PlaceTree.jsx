/* eslint-disable react/prop-types */
export default function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <>
      <li>{place.title}</li>
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </>
  );
}
