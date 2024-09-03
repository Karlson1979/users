import React from 'react'

export const Formik = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form>
				<label>
                    <input type="text" name='name' />
                    </label>
                    <label>
                    <input type="tel" name='phone' />
</label>
                
			</Form>
    </Formik>
  )
}
