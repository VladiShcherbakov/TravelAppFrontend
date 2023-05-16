import { Navbar, Header } from "../../components";
import { InnerBody, PlanningBody, Form, FormPart, FormPartLabel, FormPartInputText,  FormPartInputSubmit, FormInfo } from "./styles";
import postTripInfo from "../../api/postTripInfo";
import { useParams } from "react-router-dom";

const AddTripInfo = () => {
    const params = useParams();

    const handleSubmit = async (event) => {
        const infoModel = {
            title: event.target.name.value,
            time: event.target.date.value + "T" + event.target.time.value,
            xid: params.xid,
            travelPlanId: params.tripId,
        };
        event.preventDefault();
        await postTripInfo(infoModel);
    };

    return(
        <PlanningBody>
            <Header text="Добавление активности" />
            <InnerBody>
                <Form typeof="multipart/form-data" onSubmit={handleSubmit}>
                    <FormInfo>
                        <FormPart>
                            <FormPartLabel htmlFor="name">Название активности (Обязательно)</FormPartLabel>
                            <FormPartInputText type="text" name="name" id="name" required/>
                        </FormPart>
                        <FormPart>
                            <FormPartLabel htmlFor="date">Дата</FormPartLabel>
                            <FormPartInputText type="date" name="date" id="date" required/>
                        </FormPart>
                        <FormPart>
                            <FormPartLabel htmlFor="date">Время</FormPartLabel>
                            <FormPartInputText type="time"  name="time" id="time" required/>
                        </FormPart>
                    </FormInfo>

                    <FormPartInputSubmit type="submit" value="Сохранить"/>
                </Form>
            </InnerBody>
            <Navbar />
        </PlanningBody>
    );
}

export default AddTripInfo;