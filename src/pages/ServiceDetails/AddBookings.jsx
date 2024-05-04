import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";


const AddBookings = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { _id, service_image, service_name, service_description, service_provider_image, service_provider_name, service_provider_email, service_price } = service;
    const [open, openChange] = useState(false);

    const handlePopUp = () => {
        openChange(true);
    }
    const closePop = () => {
        openChange(false)
    }

    const handleBook = e => {
        e.preventDefault();
        openChange(false)
        const form = event.target;
        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const service_provider_email = form.service_provider_email.value;
        const user_email = form.user_email.value;
        const date = form.date.value;
        const instruction = form.instruction.value;
        const service_price = form.service_price.value;
        const status = 'pending'


        const booking = {
            service_name, service_image, service_provider_email, user_email, date, instruction, service_price,status
        }

        console.log(booking);

        axios.post('https://career-maker-server-three.vercel.app/bookings', booking)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Service purchased',

                    })
                }
            })
            .then(err => {
                console.log(err);
            })


    }

    return (
        <div>
            <Button onClick={handlePopUp} color="primary" variant="contained">Add To Book</Button>
            <Dialog open={open} fullWidth maxWidth='lg'>
                  <DialogActions>
                    <Button onClick={closePop} color="error">X</Button>
                </DialogActions>
                <DialogContent>
                    <form onSubmit={handleBook} className=" md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" readOnly name="service_name" defaultValue={service_name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Image Url</span>
                            </label>
                            <input type="text" readOnly name="service_image" defaultValue={service_image} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Provide Email</span>
                            </label>
                            <input type="email" readOnly name="service_provider_email" defaultValue={service_provider_email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" readOnly name="user_email" defaultValue={user?.email} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date"  required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instruction</span>
                            </label>
                            <textarea name="instruction" required cols="20" rows="10" className="rounded-lg"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" readOnly name="service_price" defaultValue={service_price} className="input input-bordered" />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn  btn-outline">Purchase Service</button>
                        </div>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
};

export default AddBookings;