function Dog({ dog }) {
    return (
        <>
            <h2>Name:{dog.name}</h2>
            <h2>Age:{dog.age}</h2>
            <h2>Breed:{dog.breed}</h2>
            <h2>Favotie Toy:{dog.favoriteToy}</h2>
            <h2>size:{dog.size}</h2>
            <h2>Gender:{dog.gender}</h2>
            <hr />
        </>
    )
}

export default Dog;

