import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Dish = users => {
	const { store, actions } = useContext(Context);
	//console.log(users);

	return (
		<div className="container dishcard">
			<div className="row">
				<div className="col-6">
					<h5 className="card-header">Plato: {users.users.title}</h5>
					<div className="card-body">
						<h5 className="card-title">id: {users.users.id}</h5>
						<p className="card-text">descripción: {users.users.body}</p>
						<Link to={"/searchresult/" + users.users.id}>
							<button type="button" className="btn btn-primary">
								Más info
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
