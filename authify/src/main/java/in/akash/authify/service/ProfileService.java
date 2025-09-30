package in.akash.authify.service;

import in.akash.authify.io.ProfileRequest;
import in.akash.authify.io.ProfileResponse;

public interface ProfileService {

  ProfileResponse createProfile(ProfileRequest request);

  ProfileResponse getProfile(String email);

  void sendResetOtp(String email);

  void resetPassword(String email,String otp,String newPassword);

  void sendOtp(String email);

  void verifyOtp(String email,String otp);



}
