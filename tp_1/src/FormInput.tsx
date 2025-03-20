interface FormInputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function FormInput({ label, type, name, placeholder, value, onChange }: FormInputProps) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} required />
      </div>
    );
  }
  