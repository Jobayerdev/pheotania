import { Button, Form, Input } from "antd";

import { IUpdatePermissions } from "@shared/interfaces";

interface IInitialValues {
	title: string
}

interface IFProps {
	initialValues?: IInitialValues
	onFinish?: (values: IUpdatePermissions) => void
}

const PermissionUpdateForm: React.FC<IFProps> = ({ initialValues, onFinish }) => {
    return (
        <Form
			size="middle"
			layout="vertical"
			initialValues={initialValues}
			onFinish={onFinish}>
			<Form.Item
				label="Title"
				name="title">
				<Input defaultValue={initialValues?.title} />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
    );
};

export default PermissionUpdateForm;