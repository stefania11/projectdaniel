require 'test_helper'

class GameControllerTest < ActionController::TestCase
  test "should get sandbox" do
    get :sandbox
    assert_response :success
  end

  test "should get matching" do
    get :matching
    assert_response :success
  end

  test "should get rythm" do
    get :rythm
    assert_response :success
  end

end
