import '../styles/Form.css';
import { useState } from 'react';
import { addPayment } from '../Services/APIService';

const Form = () => {
  const [contractID, setContractID] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [alert, setAlert] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (contractID === '') newErrors.contractID = 'Contract ID is required';
    if (paymentDate === '') newErrors.paymentDate = 'Payment Date is required';
    if (amountPaid === '') newErrors.amountPaid = 'Amount Paid is required';
    if (paymentStatus === '') newErrors.paymentStatus = 'Payment Status is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await addPayment({
          contractID: parseInt(contractID),
          paymentDate,
          amountPaid: parseInt(amountPaid),
          paymentStatus,
        });
        setAlert(response);
      } catch (error) {
        setAlert(error.message);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contract ID:
          <input type="number" value={contractID} onChange={e => setContractID(e.target.value)} />
          {errors.contractID && <div className="error-message">{errors.contractID}</div>}
        </label>
        <label>
          Payment Date:
          <input type="datetime-local" value={paymentDate} onChange={e => setPaymentDate(e.target.value)} />
          {errors.paymentDate && <div className="error-message">{errors.paymentDate}</div>}
        </label>
        <label>
          Amount Paid:
          <input type="number" value={amountPaid} onChange={e => setAmountPaid(e.target.value)} />
          {errors.amountPaid && <div className="error-message">{errors.amountPaid}</div>}
        </label>
        <label>
          Payment Status:
          <select value={paymentStatus} onChange={e => setPaymentStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
          {errors.paymentStatus && <div className="error-message">{errors.paymentStatus}</div>}
        </label>
        <button type="submit">Submit</button>
      </form>
      {alert && <div className="alert-message">{alert}</div>}
    </div>
  );
};

export default Form;
