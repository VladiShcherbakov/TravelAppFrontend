import { Navbar, Header } from "../../components";
import { InnerBody, PlanningBody, Form, FormPart, FormPartLabel, FormPartInputText, FormPartInputImage, FormPartInputSubmit, FormInfo } from "./styles";
import postTripPlan from "../../api/postTripPlan";

const PlanningPage = () => {

    const handleSubmit = async (event) => {
        const tripModel = {
            name: event.target.name.value,
            description: event.target.description.value,
            tripStart: event.target.date.value,
            image: document.querySelector('input[type="file"]').files[0],
        };
        event.preventDefault();
        await postTripPlan(tripModel);
    };

    return(
        <PlanningBody>
            <Header text="Создание поездки" />
            <InnerBody>
                <Form typeof="multipart/form-data" onSubmit={handleSubmit}>
                    <FormInfo>
                        <FormPart>
                            <FormPartLabel htmlFor="name">Название поездки (Обязательно)</FormPartLabel>
                            <FormPartInputText type="text" name="name" id="name" required/>
                        </FormPart>
                        <FormPart>
                            <FormPartLabel htmlFor="description">Описание</FormPartLabel>
                            <FormPartInputText type="text" name="description" id="description" />
                        </FormPart>
                        <FormPart>
                            <FormPartLabel htmlFor="date">Дата начала поездки</FormPartLabel>
                            <FormPartInputText type="date"name="date" id="date" />
                        </FormPart>
                        <FormPart>
                            <FormPartInputImage type="file" name="image" accept="image/png, image/jpg, image/jpeg"/>
                        </FormPart>
                        <FormPart><select style={{width: '100%;'}} multiple="multiple">
                            <option value="cheese" style={{height: '30px;'}}>interesting_places</option>
                            <option value="tomatoes">historic</option>
                            <option value="mozarella">cultural</option>
                            <option value="mushrooms">architecture</option>
                            <option value="pepperoni">amusements</option>
                            <option value="onions">accomodations</option>
                        </select></FormPart>
                        
                    </FormInfo>

                    <FormPartInputSubmit type="submit" value="Сохранить"/>
                </Form>
            </InnerBody>
            <Navbar />
        </PlanningBody>
    );
}

export default PlanningPage;