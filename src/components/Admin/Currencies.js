import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { backendUrl } from "../../constansts";
import { errorHandler, toastMessage } from "../../helpers";
import Loader from "../Loader/Loader";

function Currencies() {
  const { token } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [uname, setuName] = useState("");
  const [ucode, setuCode] = useState("");
  const [usellPrice, setuSellPrice] = useState("");
  const [ubuyPrice, setuBuyPrice] = useState("");
  const [uId, setuId] = useState("");
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    fetchDataSilent();
  }, []);

  const handlSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(backendUrl + "/currencies/new/", {
        name,
        sellPrice,
        code,
        buyPrice,
        token,
      })
      .then((res) => {
        setLoading(false);
        toastMessage("success", res.data.msg);
        fetchDataSilent();
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  const handleDelete = (id) => {
    setLoading(true);
    axios
      .post(backendUrl + "/currencies/remove/", {
        id,
        token,
      })
      .then((res) => {
        setLoading(false);
        toastMessage("success", res.data.msg);
        setCurrencies(currencies.filter((item) => item._id != id));
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  const fetchDataSilent = () => {
    axios
      .get(backendUrl + "/currencies/all/?token=" + token)
      .then((res) => {
        setCurrencies(res.data.result);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(backendUrl + "/currencies/update/", {
        name: uname,
        sellPrice: usellPrice,
        code: ucode,
        buyPrice: ubuyPrice,
        id: uId,
        token,
      })
      .then((res) => {
        setLoading(false);
        toastMessage("success", res.data.msg);
        fetchDataSilent();
        setShowEdit(false);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  return (
    <>
      <div className="container" style={{ padding: "2rem" }}>
        <h4 className="text-start">Currencies</h4>
        <div className="row">
          <div className="col-md-8 shadow">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Sell</th>
                  <th>Buy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>{item.sellPrice}</td>
                    <td>{item.buyPrice}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setShowEdit(true);
                          setuName(item.name);
                          setuCode(item.code);
                          setuId(item._id);
                          setuBuyPrice(item.buyPrice);
                          setuSellPrice(item.sellPrice);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Add new currency</h3>
                <form onSubmit={handlSubmit}>
                  <div className="form-group">
                    <label>Currency Name</label>
                    <input
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Currency Code</label>
                    <input
                      className="form-control"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Sell Price</label>
                    <input
                      type="number"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Buy Price</label>
                    <input
                      type="number"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <button className="btn btn-primary mt-3 w-100">submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader showLoader={loading} />
      <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Currency Name</label>
              <input
                className="form-control"
                value={uname}
                onChange={(e) => setuName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Currency Code</label>
              <input
                className="form-control"
                value={ucode}
                onChange={(e) => setuCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Sell Price</label>
              <input
                type="number"
                value={usellPrice}
                onChange={(e) => setuSellPrice(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Buy Price</label>
              <input
                type="number"
                value={ubuyPrice}
                onChange={(e) => setuBuyPrice(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <Modal.Footer>
              <button className="btn btn-primary mt-3">submit</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Currencies;
