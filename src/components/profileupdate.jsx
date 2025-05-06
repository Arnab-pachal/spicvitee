import React, { useState, useEffect } from "react";
import axios from "axios";

const MemberManager = () => {
  const [mode, setMode] = useState(""); // "", "add", "update", "delete"
  const [memberId, setMemberId] = useState("");

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-black text-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Members</h2>

      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setMode("add")} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
          Add
        </button>
        <button onClick={() => setMode("update")} className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
          Update
        </button>
        <button onClick={() => setMode("delete")} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Delete
        </button>
      </div>

      {mode === "add" && <MemberForm mode="add" />}
      {mode === "update" && (
        <>
          <MemberIdInput onSubmit={(id) => setMemberId(id)} />
          {memberId && <MemberForm mode="update" memberId={memberId} />}
        </>
      )}
      {mode === "delete" && <DeleteForm />}
    </div>
  );
};

const MemberIdInput = ({ onSubmit }) => {
  const [id, setId] = useState("");

  return (
    <div className="mb-4">
      <label htmlFor="memberId" className="block mb-1 font-medium">
        Enter Member ID to Update
      </label>
      <input
        type="text"
        id="memberId"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 mb-2 text-black rounded"
      />
      <button
        onClick={() => onSubmit(id)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Load Member
      </button>
    </div>
  );
};

const MemberForm = ({ mode, memberId = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    instaurl: "",
    linkedinurl: "",
    wing: "",
    year: "",
    position: "",
  });

  useEffect(() => {
    if (mode === "update" && memberId) {
      axios
        .get(`https://spicmacayback-85nr3lgvw-arnab-pachals-projects.vercel.app/getmembers?id=${memberId}`)
        .then((res) => {
          const { name, instaurl, linkedinurl, wing, year, position } = res.data;
          setFormData({ name, instaurl, linkedinurl, wing, year, position });
        })
        .catch(console.error);
    }
  }, [mode, memberId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "update") {
        await axios.post(`https://spicmacayback-85nr3lgvw-arnab-pachals-projects.vercel.app/updatemember?id=${memberId}`, formData);
        alert("Member updated successfully");
      } else {
        const data = new FormData();
        Object.entries(formData).forEach(([key, val]) => data.append(key, val));

        await axios.post("https://spicmacayback-85nr3lgvw-arnab-pachals-projects.vercel.app/uploadmembers", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Member added successfully");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const fields = ["name", "instaurl", "linkedinurl", "wing", "year", "position"];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field}>
          <label className="block font-medium capitalize mb-1" htmlFor={field}>
            {field}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
      >
        {mode === "update" ? "Update" : "Add"} Member
      </button>
    </form>
  );
};

const DeleteForm = () => {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    if (!id) return alert("Enter a member ID");
    try {
      await axios.delete(`https://spicmacayback-85nr3lgvw-arnab-pachals-projects.vercel.app/deletemember?id=${id}`);
      alert("Member deleted successfully");
      setId("");
    } catch (err) {
      console.error(err);
      alert("Failed to delete member");
    }
  };

  return (
    <div>
      <label htmlFor="deleteId" className="block mb-1 font-medium">
        Enter Member ID to Delete
      </label>
      <input
        type="text"
        id="deleteId"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 mb-2 text-black rounded"
      />
      <button
        onClick={handleDelete}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
      >
        Delete Member
      </button>
    </div>
  );
};

export default MemberManager;
