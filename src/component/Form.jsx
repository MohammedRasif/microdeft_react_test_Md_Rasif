import Swal from "sweetalert2";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    badge_text: "",
    instructor_name: "",
    badge_color: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const token = sessionStorage.getItem("token");
      console.log("Token:", token);

      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${formData.title} has been added successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Success:", await response.json());
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add the contest",
        });
    }
  };

  return (
    <div className="w-1/2 ml-36">
      <div className="flex items-center justify-center p-6">
        <div className="w-full p-8">
          <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Title <span className="text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border-b-2 bg-transparent border-green-600 focus:border-green-800 outline-none py-2 placeholder:text-green-600"
              />
            </div>

            {/* Instructor Name Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Instructor Name <span className="text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Instructor Name"
                name="instructor_name"
                value={formData.instructor_name}
                onChange={handleChange}
                required
                className="w-full border-b-2 bg-transparent focus:border-green-800 border-green-600 outline-none py-2 placeholder:text-green-600"
              />
            </div>

            {/* Badge Text Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Badge Text <span className="text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Badge Text"
                name="badge_text"
                value={formData.badge_text}
                onChange={handleChange}
                required
                className="w-full border-b-2 bg-transparent focus:border-green-800 border-green-600 outline-none py-2 placeholder:text-green-600"
              />
            </div>

            {/* Badge Color Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Badge Color <span className="text-green-600">*</span>
              </label>
              <input
                list="colors"
                placeholder="Select or Type Color"
                name="badge_color"
                value={formData.badge_color}
                onChange={handleChange}
                required
                className="w-full border-b-2 bg-transparent focus:border-green-800 border-green-600 outline-none py-2 placeholder:text-green-600"
              />
              <datalist id="colors">
                <option value="Red (#ff0000)" />
                <option value="Green (#00ff00)" />
                <option value="Blue (#0000ff)" />
                <option value="Yellow (#ffff00)" />
                <option value="Purple (#800080)" />
              </datalist>
            </div>

            {/* Description Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Description <span className="text-green-600">*</span>
              </label>
              <textarea
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border-b-2 bg-transparent focus:border-green-800 border-green-600 outline-none py-2 placeholder:text-green-600"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn glass border-green-600 text-white font-medium p-3 rounded-lg bg-green-600 hover:bg-green-700 focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
