import React, { useState } from "react";
import Dash from "../Dash/Dash";
import {
  MdEdit,
  MdOutlineKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdDelete,
  MdCheck,
  MdAddCircleOutline,
} from "react-icons/md";
import "../core/core.css";
import "../core/colors.css";
import "./FaqsAdmin.css";

const FaqsAdmin = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      title: "What is this platform?",
      answers: ["This is a Q&A platform."],
      isEditing: false,
    },
    {
      id: 2,
      title: "How to use it?",
      answers: ["You can ask and answer questions."],
      isEditing: false,
    },
    {
      id: 3,
      title: "How do I reset my password?",
      answers: ["Click on 'Forgot Password' and follow the instructions."],
      isEditing: false,
    },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);
  const [errors, setErrors] = useState({});

  // Validate FAQ before saving
  const validateFAQ = (faq) => {
    let errorMessages = {};
    if (!faq.title.trim()) errorMessages.title = "Title cannot be empty";
    if (faq.answers.some((answer) => !answer.trim())) {
      errorMessages.answers = "Answers cannot be empty";
    }
    return errorMessages;
  };

  // Toggle Edit Mode
  const toggleEditMode = (faqId) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => {
        if (faq.id === faqId) {
          if (faq.isEditing) {
            const validationErrors = validateFAQ(faq);
            if (Object.keys(validationErrors).length > 0) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                [faqId]: validationErrors,
              }));
              return faq;
            }
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[faqId];
              return newErrors;
            });
          }
          return { ...faq, isEditing: !faq.isEditing };
        }
        return faq;
      })
    );
  };

  // Handle Title Change
  const handleTitleChange = (faqId, newTitle) => {
    setFaqs(
      faqs.map((faq) => (faq.id === faqId ? { ...faq, title: newTitle } : faq))
    );
  };

  // Move FAQ Up
  const moveUp = (index) => {
    if (index === 0) return;
    const updatedFaqs = [...faqs];
    [updatedFaqs[index], updatedFaqs[index - 1]] = [
      updatedFaqs[index - 1],
      updatedFaqs[index],
    ];
    setFaqs(updatedFaqs);
  };

  // Move FAQ Down
  const moveDown = (index) => {
    if (index === faqs.length - 1) return;
    const updatedFaqs = [...faqs];
    [updatedFaqs[index], updatedFaqs[index + 1]] = [
      updatedFaqs[index + 1],
      updatedFaqs[index],
    ];
    setFaqs(updatedFaqs);
  };

  // Drag and Drop Functions
  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedItem === null || draggedItem === index) return;

    const updatedFaqs = [...faqs];
    const draggedFaq = updatedFaqs.splice(draggedItem, 1)[0];
    updatedFaqs.splice(index, 0, draggedFaq);

    setFaqs(updatedFaqs);
    setDraggedItem(null);
  };

  // Handle Answer Management
  const addAnswer = (faqId) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === faqId ? { ...faq, answers: [...faq.answers, ""] } : faq
      )
    );
  };

  const editAnswer = (faqId, index, newAnswer) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === faqId
          ? {
              ...faq,
              answers: faq.answers.map((ans, i) =>
                i === index ? newAnswer : ans
              ),
            }
          : faq
      )
    );
  };

  const removeAnswer = (faqId, index) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === faqId && faq.answers.length > 1
          ? { ...faq, answers: faq.answers.filter((_, i) => i !== index) }
          : faq
      )
    );
  };

  const addNewQuestion = () => {
    const newFaq = {
      id: Date.now(),
      title: "",
      answers: [""],
      isEditing: true,
    };
    setFaqs([...faqs, newFaq]);
  };

  return (
    <div className="flex">
      <Dash />
      <div className="faq-container-2">
        <h2 className="faq-title">Manage FAQs</h2>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`faq-item ${draggedItem !== null ? "dragging" : ""}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <div className="faq-content">
              <input
                type="text"
                value={faq.title}
                className="faq-input-title"
                onChange={(e) => handleTitleChange(faq.id, e.target.value)}
                readOnly={!faq.isEditing}
                placeholder="Enter question title"
              />
              {faq.isEditing ? (
                <MdCheck
                  className="faq-edit-icon"
                  size={28}
                  onClick={() => toggleEditMode(faq.id)}
                  color="var(--green-success)"
                  title="Save"
                />
              ) : (
                <MdEdit
                  className="faq-edit-icon"
                  size={27}
                  onClick={() => toggleEditMode(faq.id)}
                  title="Edit"
                />
              )}
            </div>
            {errors[faq.id]?.title && (
              <p className="error-text">{errors[faq.id].title}</p>
            )}
            <div className="faq-answers">
              {faq.answers.map((answer, ansIndex) => (
                <div key={ansIndex} className="faq-answer-container">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) =>
                      editAnswer(faq.id, ansIndex, e.target.value)
                    }
                    className="faq-answer-input"
                    placeholder="Enter answer"
                    readOnly={!faq.isEditing}
                  />
                  {faq.answers.length > 1 && (
                    <MdDelete
                      color="#e74c3c"
                      size={25}
                      className="faq-remove-btn"
                      onClick={() => removeAnswer(faq.id, ansIndex)}
                    />
                  )}
                </div>
              ))}
              {errors[faq.id]?.answers && (
                <p className="error-text">{errors[faq.id].answers}</p>
              )}
              <div className="bottom-con mgt-1">
                {faq.isEditing && (
                  <button
                    className="faq-add-answer-btn btn-outline"
                    onClick={() => addAnswer(faq.id)}
                  >
                    Add Answer
                  </button>
                )}
                <div className="faq-controls">
                  <MdOutlineKeyboardArrowUp
                    size={25}
                    className="faq-move-btn up"
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                  />
                  <MdKeyboardArrowDown
                    size={25}
                    className="faq-move-btn down"
                    onClick={() => moveDown(index)}
                    disabled={index === faqs.length - 1}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="faq-add-question-btn" onClick={addNewQuestion}>
          <MdAddCircleOutline size={24} /> Add New Question
        </button>
      </div>
    </div>
  );
};

export default FaqsAdmin;
