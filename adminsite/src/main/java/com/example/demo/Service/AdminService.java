		package com.example.demo.Service;
		
		import java.util.List;
		import java.util.Optional;
		
		import org.springframework.beans.factory.annotation.Autowired;
		import org.springframework.stereotype.Service;
		
		import com.example.demo.Model.AdminModel;
		import com.example.demo.Repository.AdminRepo;
		
		@Service
		public class AdminService {
		
			
			@Autowired
			private AdminRepo dash;
			
			public List<AdminModel> getdashboarddetails(){
				return dash.findAll();
			}
			
			public Optional<AdminModel> getuserByID(int id){
				return dash.findById(id);
			}
			public void saveData(AdminModel adm) {
				
				dash.save(adm);
			}
		}
