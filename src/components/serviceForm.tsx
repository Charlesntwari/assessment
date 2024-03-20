import React, { useState } from 'react';
import './serviceForm.css';

interface Errors {
    [key: string]: string;
}

const ServiceForm = () => {
    const [citizenship, setCitizenship] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [otherNames, setOtherNames] = useState('');
    const [surname, setSurname] = useState('');
    const [nationality, setNationality] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [email, setEmail] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [tinNumber, setTinNumber] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [businessDistrict, setBusinessDistrict] = useState('');
    const [purposeOfImportation, setPurposeOfImportation] = useState('');
    const [specifyPurpose, setSpecifyPurpose] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [weight, setWeight] = useState('');
    const [description, setDescription] = useState('');
    const [unitOfMeasurement, setUnitOfMeasurement] = useState('');
    const [quantity, setQuantity] = useState('');
    const [errors, setErrors] = useState<Errors>({});

    const validateForm = () => {
        const errors: Errors = {};
        let isValid = true;

        // Validate citizenship
        if (!citizenship) {
            errors['citizenship'] = 'Please select citizenship';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            console.log({
                citizenship,
                identificationNumber,
                otherNames,
                surname,
                nationality,
                passportNumber,
                email,
                businessType,
                companyName,
                tinNumber,
                registrationDate,
                businessDistrict,
                purposeOfImportation,
                specifyPurpose,
                productCategory,
                productName,
                weight,
                description,
                unitOfMeasurement,
                quantity,
            });
            // Clear form after successful submission
            clearForm();
        } else {
            console.error('Form validation failed');
        }
    };

    const clearForm = () => {
        setCitizenship('');
        setIdentificationNumber('');
        setOtherNames('');
        setSurname('');
        setNationality('');
        setPassportNumber('');
        setEmail('');
        setBusinessType('');
        setCompanyName('');
        setTinNumber('');
        setRegistrationDate('');
        setBusinessDistrict('');
        setPurposeOfImportation('');
        setSpecifyPurpose('');
        setProductCategory('');
        setProductName('');
        setWeight('');
        setDescription('');
        setUnitOfMeasurement('');
        setQuantity('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="citizenship">Applicant citizenship:</label>
                <select
                    id="citizenship"
                    value={citizenship}
                    onChange={(e) => setCitizenship(e.target.value)}
                    required
                >
                    <option value="">Select citizenship</option>
                    <option value="Rwandan">Rwandan</option>
                    <option value="Foreigner">Foreigner</option>
                </select>
                {errors['citizenship'] && <span className="error">{errors['citizenship']}</span>}
                {citizenship === 'Rwandan' && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter Identification document number"
                            value={identificationNumber}
                            onChange={(e) => setIdentificationNumber(e.target.value)}
                            required
                        />                     
                        <input
                            type="text"
                            placeholder="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Other names"
                            value={otherNames}
                            onChange={(e) => setOtherNames(e.target.value)}
                            required
                        />
                    </>
                )}
                {citizenship === 'Foreigner' && (
                    <div>
                        <input
                            type="text"
                            placeholder="Passport number"
                            value={passportNumber}
                            onChange={(e) => setPassportNumber(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Nationality"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            required
                        />
                    </div>
                )}
                <input
                    type="text"
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* Business Details */}
            <div>
                <label htmlFor="business-type">Business Type:</label>
                <select
                    id="business-type"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    required
                >
                    <option value="">Enter BusinessType</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Manufacturer">Manufacturer</option>
                </select>
                <input
                    type="text"
                    placeholder="Company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required 
                />
                <div className="tin-registration-container">
                    <input
                        type="text"
                        placeholder="TIN number"
                        value={tinNumber}
                        onChange={(e) => setTinNumber(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        value={registrationDate}
                        onChange={(e) => setRegistrationDate(e.target.value)}
                        required
                    />
                </div>
                <input
                    type="text"
                    placeholder="District"
                    value={businessDistrict}
                    onChange={(e) => setBusinessDistrict(e.target.value)}
                    required
                />
            </div>

            {/* Product Information */}
            <div>
                <label htmlFor="purpose-of-importation">Purpose of importation:</label>
                <select
                    id="purpose-of-importation"
                    value={purposeOfImportation}
                    onChange={(e) => setPurposeOfImportation(e.target.value)}
                    required // Adding required attribute
                >
                    <option value="">Select the purpose of importation</option>
                    <option value="Direct sale">Direct sale</option>
                    <option value="Personal use">Personal use</option>
                    <option value="Trial use">Trial use</option>
                    <option value="Other">Other</option>
                </select>
                {purposeOfImportation === 'Other' && (
                    <input
                        type="text"
                        placeholder="Specify purpose of importation"
                        value={specifyPurpose}
                        onChange={(e) => setSpecifyPurpose(e.target.value)}
                        required
                    />
                )}
                <label htmlFor="product-category">Product category:</label>
                <select
                    id="product-category"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    required
                >
                    <option value="">Select product category</option>
                    <option value="General purpose">General purpose</option>
                    <option value="Construction materials">Construction materials</option>
                    <option value="Chemicals">Chemicals</option>
                </select>
                <input
                    type="text"
                    placeholder="Product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required 
                />
                <div className="unity-measurement-container">
                    <select
                        id="unit-of-measurement"
                        value={unitOfMeasurement}
                        onChange={(e) => setUnitOfMeasurement(e.target.value)}
                        required
                    >
                        <option value="">Enter unit of measurement</option>
                        <option value="Kgs">Kgs</option>
                        <option value="Tonnes">Tonnes</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Quantity of product(s)"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <textarea
                    placeholder="Description of products"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            <div className="button-container">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ServiceForm;
