<Routes>
  <Route path="/" element={<App />}>
    <Route
      index
      element={
        <TextForm
          heading="Enter Text to Analyze"
          mode={mode}
          showAlert={showAlert}
        />
      }
    />
    <Route path="about" element={<About />}>
      <Route index element={<About />} />
    </Route>
  </Route>
</Routes>;
