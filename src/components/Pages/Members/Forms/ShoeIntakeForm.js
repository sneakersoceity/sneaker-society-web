import { Grid, MenuItem, Select, Typography } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

const shoeSizes = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
];
export default function ShowIntakeForm(props) {
  const {
    formField: { shoeBrand, shoeName, askingFor, shoeSize, description },
  } = props;
  return (
    <>
      {/* <Typography variant="h6" align="center" pt={4}>
        Shoe Intake Form
      </Typography> */}
      <Grid container spacing={3} pt= {2}>
        <Grid item xs={12}>
          <InputField name={shoeBrand.name} label={shoeBrand.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={shoeName.name} label={shoeName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            name={shoeSize.name}
            label={shoeSize.label}
            data={shoeSizes}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={askingFor.name} label={askingFor.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={description.name}
            label={description.label}
            multiline
            minRows={3}
            maxRows={5}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
