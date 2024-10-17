import React, { useState } from 'react'

const Forms = () => {

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      country: "India",
      streetAddress: "",
      city: "",
      state: "",
      postal: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotification: "",
    });

    const changeHandler = (event) => {
        const {name, type, value, checked} = event.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    }

  return (
    <form
      className="md:w-1/2 md:max-w-[1000px] rounded-md flex flex-col mx-auto gap-2 p-[30px] my-5 shadow-md"
      action=""
      onSubmit={submitHandler}
    >
      {/* first name */}
      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          First Name{" "}
        </label>
        <input
          type="text"
          placeholder="Eg. Bikash"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          onChange={changeHandler}
          required
        />
      </div>

      {/* last name */}
      <div>
        <label htmlFor="lastName" className="font-medium text-sm">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Eg. Mahanta"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="w-full rounded-md border border-blue-400 p-2 mt-2"
          required
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="font-medium text-sm">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Eg. bikashcool404@gmail.com"
          name="email"
          id="email"
          onChange={changeHandler}
          value={formData.email}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* Country-Drop Down */}
      <div>
        <label htmlFor="country" className="font-medium text-sm">
          Country
        </label>
        <select
          className="w-full border border-blue-400 p-2 mt-2 rounded-md"
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          required
        >
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="Japan">Japan</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      {/* Street Address */}
      <div>
        <label htmlFor="streetAddress" className="font-medium text-sm">
          Street Address
        </label>

        <textarea
          className="w-full border border-blue-400 p-3 mt-2 rounded-md"
          placeholder="Eg. Baruna"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          required
        ></textarea>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="font-medium text-sm">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          placeholder="Eg. Keonjhar"
          required
        />
      </div>

      {/* State / Province */}
      <div>
        <label htmlFor="state" className="font-medium text-sm">
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          placeholder="Odisha"
          required
        />
      </div>

      {/* ZIP / Postal Code */}
      <div>
        <label htmlFor="postal" className="font-medium text-sm">
          Postal Code
        </label>
        <input
          type="text"
          name="postal"
          id="postal"
          value={formData.postal}
          onChange={changeHandler}
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          placeholder="750012"
          required
        />
      </div>

      {/* Email- Checkboxes */}
      <div className="mb-4">
        {/* fieldset and legend */}
        <label className="font-medium text-sm">By Email</label>
        <div className="flex items-start mt-2 gap-4">
          <div>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="w-4 h-4 mt-[6px]"
            />
          </div>
          <div>
            <label htmlFor="comments" className="font-medium text-sm">
              Comments
            </label>
            <p className="text-sm opacity-50">
              Get notified when someones post a comment on a posting
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mt-[6px]">
          <div>
            <input
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="w-4 h-4 mt-[6px]"
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor="candidates" className="font-medium text-sm">
              Candidates
            </label>
            <p className="text-sm opacity-50">
              Get notified when a candidate applies for a job
            </p>
          </div>
        </div>

        <div className="flex items-start mt-[6px] gap-4">
          <div>
            <input
              className="w-4 h-4 mt-[6px]"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
              name="offers"
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor="offers" className="font-medium text-sm">
              Offers
            </label>
            <p className="text-sm opacity-50">
              Get notified when a candidate accepts or rejects an offer
            </p>
          </div>
        </div>
      </div>

      {/* push notification - radio */}
      <div className="mb-4">
        <label className="font-medium text-sm">Push Notifications</label>
        <p className="text-sm opacity-70">
          These are delivered via SMS to your mobile phone
        </p>
        <div className="flex items-center gap-4 mt-2">
          <input
            name="pushNotification"
            className="w-4 h-4"
            id="radio1"
            value="Everything"
            type="radio"
            onChange={changeHandler}
          />
          <label htmlFor="radio1" className="font-medium text-sm">
            Everything
          </label>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <input
            name="pushNotification"
            className="w-4 h-4"
            id="radio2"
            value="Same as email"
            type="radio"
            onChange={changeHandler}
          />
          <label htmlFor="radio2" className="font-medium text-sm">
            Same as email
          </label>
        </div>
        <div className="flex items-center mt-2 gap-4">
          <input
            name="pushNotification"
            className="w-4 h-4"
            id="radio3"
            type="radio"
            value="No push notifications"
            onChange={changeHandler}
          />
          <label htmlFor="radio3" className="font-medium text-sm">
            No push notifications
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-blue-500 py-2 px-4 font-medium rounded-md text-white hover:bg-blue-700 transition-all duration-200"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default Forms;
