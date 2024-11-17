const Card = (props) => {
  return (
    <div
      class="card text-center ms-2 mb-2"
      style={{ width: "18rem" }}
    >
      <img className="bg-dark-subtle" src={props.image} class="card-img-top" alt="imagen" />
      <div class="card-body bg-secondary-subtle">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <div className="d-flex justify-content-evenly">
            <a href="#" class="btn btn-success">Comprar</a>
            <span className="fs-5 text-dark">{props.precio} $</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
